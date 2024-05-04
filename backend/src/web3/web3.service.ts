import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { BaseCCIP } from './abis/BaseTransferUSDCBasic';
import { SepoliaCCIP } from './abis/SepoliaTransferUSDCBasic';
import { Swap } from './abis/Swap';
import { Token } from './abis/Token';

@Injectable()
export class Web3Service {
  private baseProvider: ethers.AlchemyProvider;
  private ethProvider: ethers.AlchemyProvider;
  private baseWallet: ethers.Wallet;
  private ethWallet: ethers.Wallet;
  private baseCCIP: ethers.Contract;
  private baseSwap: ethers.Contract;
  private ethCCIP: ethers.Contract;
  private ethSwap: ethers.Contract;
  private baseToken: ethers.Contract;
  private ethToken: ethers.Contract;

  private delegate = '0x36a279136adDde960599fcA356369C04A96D387E';
  private baseUSDCAddress = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
  private ethUSDCAddress = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';

  /**
   * Listen to on chain Transferred events
   */
  private async listenToBurnEvent() {
    try {
      await this.baseToken.removeAllListeners();
      await this.ethToken.removeAllListeners();
      console.log(`📡 Subscribing to Transferred event`);
      const baseFilter = this.baseToken.filters.Transfer(null, this.delegate);
      const ethFilter = this.ethToken.filters.Transfer(null, this.delegate);
      this.baseToken.on(baseFilter, async (event) => {
        try {
          if (event.args[0] === '0xEd806AbB88FffbfB515d041DDC9048573E26d9b9') {
            console.log('received');
            // Once receiving the funds, delegate needs to send to CCIP
            const approve = await this.baseToken.approve(
              this.baseCCIP.target,
              20000000,
            );
            await approve.wait();
            console.log('approved');
            const tx = await this.baseCCIP.transferUsdcToSepolia(
              this.delegate,
              1000000,
            );
            const res = await tx.wait();
            console.log('transferred', { res: res.logs[15].args[0] });
          } else {
            // Received from CCIP, need to swap to user
            console.log('received to swap');
            const approve = await this.baseToken.approve(
              this.baseSwap.target,
              20000000,
            );
            await approve.wait();
            const tx = await this.baseSwap.swap(
              '0xB67B10aB2CE4EA3586383922eFdA5996Aff2Cf94',
              '0x6f1524F5A1152d6b08ef8833E42E4311151e904F',
            );
            await tx.wait();
          }
        } catch (error) {
          console.error(`Error handling transfer: ${error.message}`);
        }
      });
      this.ethToken.on(ethFilter, async (event) => {
        try {
          if (event.args[0] === '0x3333108527DE4122ca2B10162df8884eab9c9837') {
            console.log('received');
            // Once receiving the funds, delegate needs to send to CCIP
            const approve = await this.ethToken.approve(
              this.ethCCIP.target,
              20000000,
            );
            await approve.wait();
            console.log('approved');
            const tx = await this.ethCCIP.transferUsdcToSepolia(
              this.delegate,
              1000000,
            );
            const res = await tx.wait();
            console.log('transferred', { res: res.logs[15].args[0] });
          } else {
            // Received from CCIP, need to swap to user
            console.log('received to swap');
            const approve = await this.ethToken.approve(
              this.ethSwap.target,
              20000000,
            );
            await approve.wait();
            const tx = await this.ethSwap.swap(
              '0xDDbfe4d55164C39078d748f4af3349Ef844453dC',
              '0x6f1524F5A1152d6b08ef8833E42E4311151e904F',
            );
            await tx.wait();
          }
        } catch (error) {
          console.error(`Error handling transfer: ${error.message}`);
        }
      });
    } catch (error) {
      console.error(`Error subscribing to Transferred event: ${error.message}`);
      if (error.code === -32000 || error.message === 'filter not found') {
        console.error('Filter expired, reconnecting...');
      } else {
        console.error('Unexpected error:', error);
      }
      await this.listenToBurnEvent();
    }
  }

  constructor() {
    this.baseProvider = new ethers.AlchemyProvider(
      84532,
      process.env.ALCHEMY_KEY,
    );
    this.ethProvider = new ethers.AlchemyProvider(
      11155111,
      process.env.ALCHEMY_KEY,
    );
    this.baseWallet = new ethers.Wallet(
      process.env.PRIVATE_KEY,
      this.baseProvider,
    );
    this.ethWallet = new ethers.Wallet(
      process.env.PRIVATE_KEY,
      this.ethProvider,
    );
    this.baseCCIP = new ethers.Contract(
      '0xe4f30e770811328b57a346df19c72fb8a326caac',
      BaseCCIP.abi,
      this.baseWallet,
    );
    this.ethCCIP = new ethers.Contract(
      '0x2c5236499e0a2e2e7ce661a57f7223002e1bce99',
      SepoliaCCIP.abi,
      this.ethWallet,
    );
    this.baseSwap = new ethers.Contract(
      '0xEd806AbB88FffbfB515d041DDC9048573E26d9b9',
      Swap.abi,
      this.baseWallet,
    );
    this.ethSwap = new ethers.Contract(
      '0x3333108527DE4122ca2B10162df8884eab9c9837',
      Swap.abi,
      this.ethWallet,
    );
    this.baseToken = new ethers.Contract(
      this.baseUSDCAddress,
      Token.abi,
      this.baseWallet,
    );
    this.ethToken = new ethers.Contract(
      this.ethUSDCAddress,
      Token.abi,
      this.ethWallet,
    );
    this.listenToBurnEvent();
  }

  //   async sendBaseCCIP(address: string, amount: number) {
  //     const tx = await this.baseCCIP.;
  //     await tx.wait();
  //     return tx.hash;
  //   }
}
