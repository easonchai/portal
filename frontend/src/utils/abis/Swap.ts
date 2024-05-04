export const Swap = {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_usdc', type: 'address', internalType: 'address' },
        { name: '_delegate', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'approve',
      inputs: [{ name: '_token', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'swap',
      inputs: [
        { name: '_toToken', type: 'address', internalType: 'address' },
        { name: '_recipient', type: 'address', internalType: 'address' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'swapToUSDC',
      inputs: [
        { name: '_fromToken', type: 'address', internalType: 'address' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'swapToUSDC',
      inputs: [],
      outputs: [],
      stateMutability: 'payable',
    },
  ],
  bytecode: {
    object:
      '0x608060405234801561001057600080fd5b5060405161064838038061064883398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b61058a806100be6000396000f3fe60806040526004361061003f5760003560e01c80636b76484e14610044578063aff4957814610066578063d2d7ab0d14610086578063daea85c51461008e575b600080fd5b34801561005057600080fd5b5061006461005f3660046104c4565b6100ae565b005b34801561007257600080fd5b506100646100813660046104f7565b61021c565b610064610387565b34801561009a57600080fd5b506100646100a93660046104f7565b610405565b600080546040516370a0823160e01b81523360048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156100f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011b9190610519565b6000546040516323b872dd60e01b8152336004820152306024820152604481018390529192506001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101979190610532565b5060405163a9059cbb60e01b81526001600160a01b038381166004830152678ac7230489e80000602483015284919082169063a9059cbb906044016020604051808303816000875af11580156101f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102159190610532565b5050505050565b600080546040516370a0823160e01b81523360048201528392916001600160a01b0316906370a0823190602401602060405180830381865afa158015610266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028a9190610519565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091506001600160a01b038316906323b872dd906064016020604051808303816000875af11580156102e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103049190610532565b5060005460015460405163a9059cbb60e01b81526001600160a01b039182166004820152620f4240602482015291169063a9059cbb906044015b6020604051808303816000875af115801561035d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103819190610532565b50505050565b60005460015460405163a9059cbb60e01b81526001600160a01b039182166004820152620f4240602482015291169063a9059cbb906044016020604051808303816000875af11580156103de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104029190610532565b50565b6040516370a0823160e01b815233600482015281906000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561044e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104729190610519565b60405163095ea7b360e01b8152306004820152602481018290529091506001600160a01b0383169063095ea7b39060440161033e565b80356001600160a01b03811681146104bf57600080fd5b919050565b600080604083850312156104d757600080fd5b6104e0836104a8565b91506104ee602084016104a8565b90509250929050565b60006020828403121561050957600080fd5b610512826104a8565b9392505050565b60006020828403121561052b57600080fd5b5051919050565b60006020828403121561054457600080fd5b8151801515811461051257600080fdfea2646970667358221220045139b284af3dba08301667e97cee95e1f76c5b9065116da970a275daa0dbf164736f6c63430008170033',
    sourceMap:
      '146:1192:21:-:0;;;275:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;331:4;:20;;-1:-1:-1;;;;;331:20:21;;;-1:-1:-1;;;;;;331:20:21;;;;;;;;361;;;;;;;;;;;146:1192;;14:177:22;93:13;;-1:-1:-1;;;;;135:31:22;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:293::-;275:6;283;336:2;324:9;315:7;311:23;307:32;304:52;;;352:1;349;342:12;304:52;375:40;405:9;375:40;:::i;:::-;365:50;;434:49;479:2;468:9;464:18;434:49;:::i;:::-;424:59;;196:293;;;;;:::o;:::-;146:1192:21;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x60806040526004361061003f5760003560e01c80636b76484e14610044578063aff4957814610066578063d2d7ab0d14610086578063daea85c51461008e575b600080fd5b34801561005057600080fd5b5061006461005f3660046104c4565b6100ae565b005b34801561007257600080fd5b506100646100813660046104f7565b61021c565b610064610387565b34801561009a57600080fd5b506100646100a93660046104f7565b610405565b600080546040516370a0823160e01b81523360048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156100f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011b9190610519565b6000546040516323b872dd60e01b8152336004820152306024820152604481018390529192506001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101979190610532565b5060405163a9059cbb60e01b81526001600160a01b038381166004830152678ac7230489e80000602483015284919082169063a9059cbb906044016020604051808303816000875af11580156101f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102159190610532565b5050505050565b600080546040516370a0823160e01b81523360048201528392916001600160a01b0316906370a0823190602401602060405180830381865afa158015610266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028a9190610519565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091506001600160a01b038316906323b872dd906064016020604051808303816000875af11580156102e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103049190610532565b5060005460015460405163a9059cbb60e01b81526001600160a01b039182166004820152620f4240602482015291169063a9059cbb906044015b6020604051808303816000875af115801561035d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103819190610532565b50505050565b60005460015460405163a9059cbb60e01b81526001600160a01b039182166004820152620f4240602482015291169063a9059cbb906044016020604051808303816000875af11580156103de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104029190610532565b50565b6040516370a0823160e01b815233600482015281906000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561044e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104729190610519565b60405163095ea7b360e01b8152306004820152602481018290529091506001600160a01b0383169063095ea7b39060440161033e565b80356001600160a01b03811681146104bf57600080fd5b919050565b600080604083850312156104d757600080fd5b6104e0836104a8565b91506104ee602084016104a8565b90509250929050565b60006020828403121561050957600080fd5b610512826104a8565b9392505050565b60006020828403121561052b57600080fd5b5051919050565b60006020828403121561054457600080fd5b8151801515811461051257600080fdfea2646970667358221220045139b284af3dba08301667e97cee95e1f76c5b9065116da970a275daa0dbf164736f6c63430008170033',
    sourceMap:
      '146:1192:21:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1069:267;;;;;;;;;;-1:-1:-1;1069:267:21;;;;;:::i;:::-;;:::i;:::-;;653:253;;;;;;;;;;-1:-1:-1;653:253:21;;;;;:::i;:::-;;:::i;936:82::-;;;:::i;429:188::-;;;;;;;;;;-1:-1:-1;429:188:21;;;;;:::i;:::-;;:::i;1069:267::-;1138:15;1156:4;;:26;;-1:-1:-1;;;1156:26:21;;1171:10;1156:26;;;794:51:22;-1:-1:-1;;;;;1156:4:21;;;;:14;;767:18:22;;1156:26:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1192:4;;:53;;-1:-1:-1;;;1192:53:21;;1210:10;1192:53;;;1285:34:22;1230:4:21;1335:18:22;;;1328:43;1387:18;;;1380:34;;;1138:44:21;;-1:-1:-1;;;;;;1192:4:21;;:17;;1220:18:22;;1192:53:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1296:33:21;;-1:-1:-1;;;1296:33:21;;-1:-1:-1;;;;;1926:32:22;;;1296:33:21;;;1908:51:22;1323:5:21;1975:18:22;;;1968:34;1277:8:21;;1296:14;;;;;;1881:18:22;;1296:33:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1128:208;;1069:267;;:::o;653:253::-;710:12;771:4;;:26;;-1:-1:-1;;;771:26:21;;786:10;771:26;;;794:51:22;732:10:21;;710:12;-1:-1:-1;;;;;771:4:21;;:14;;767:18:22;;771:26:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;807:54;;-1:-1:-1;;;807:54:21;;826:10;807:54;;;1285:34:22;846:4:21;1335:18:22;;;1328:43;1387:18;;;1380:34;;;753:44:21;;-1:-1:-1;;;;;;807:18:21;;;;;1220::22;;807:54:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;871:4:21;;;885:8;871:28;;-1:-1:-1;;;871:28:21;;-1:-1:-1;;;;;885:8:21;;;871:28;;;1908:51:22;895:3:21;1975:18:22;;;1968:34;871:4:21;;;:13;;1881:18:22;;871:28:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;700:206;;653:253;:::o;936:82::-;983:4;;;997:8;983:28;;-1:-1:-1;;;983:28:21;;-1:-1:-1;;;;;997:8:21;;;983:28;;;1908:51:22;1007:3:21;1975:18:22;;;1968:34;983:4:21;;;:13;;1881:18:22;;983:28:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;936:82::o;429:188::-;536:27;;-1:-1:-1;;;536:27:21;;552:10;536:27;;;794:51:22;501:6:21;;479:12;;-1:-1:-1;;;;;536:15:21;;;;;767:18:22;;536:27:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;573:37;;-1:-1:-1;;;573:37:21;;595:4;573:37;;;1908:51:22;1975:18;;;1968:34;;;518:45:21;;-1:-1:-1;;;;;;573:13:21;;;;;1881:18:22;;573:37:21;1707:301:22;14:173;82:20;;-1:-1:-1;;;;;131:31:22;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:260::-;260:6;268;321:2;309:9;300:7;296:23;292:32;289:52;;;337:1;334;327:12;289:52;360:29;379:9;360:29;:::i;:::-;350:39;;408:38;442:2;431:9;427:18;408:38;:::i;:::-;398:48;;192:260;;;;;:::o;457:186::-;516:6;569:2;557:9;548:7;544:23;540:32;537:52;;;585:1;582;575:12;537:52;608:29;627:9;608:29;:::i;:::-;598:39;457:186;-1:-1:-1;;;457:186:22:o;856:184::-;926:6;979:2;967:9;958:7;954:23;950:32;947:52;;;995:1;992;985:12;947:52;-1:-1:-1;1018:16:22;;856:184;-1:-1:-1;856:184:22:o;1425:277::-;1492:6;1545:2;1533:9;1524:7;1520:23;1516:32;1513:52;;;1561:1;1558;1551:12;1513:52;1593:9;1587:16;1646:5;1639:13;1632:21;1625:5;1622:32;1612:60;;1668:1;1665;1658:12',
    linkReferences: {},
  },
  methodIdentifiers: {
    'approve(address)': 'daea85c5',
    'swap(address,address)': '6b76484e',
    'swapToUSDC()': 'd2d7ab0d',
    'swapToUSDC(address)': 'aff49578',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.23+commit.f704f362"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_usdc","type":"address"},{"internalType":"address","name":"_delegate","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_toToken","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"}],"name":"swapToUSDC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapToUSDC","outputs":[],"stateMutability":"payable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/Swap.sol":"Swap"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@chainlink/=lib/@chainlink/contracts-ccip/src/",":@chainlink/contracts-ccip/=lib/chainlink-local/lib/ccip/contracts/",":@chainlink/local/src/=lib/chainlink-local/src/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":ccip/=lib/ccip/contracts/",":chainlink-local/=lib/chainlink-local/src/",":ds-test/=lib/chainlink-local/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70","license":"MIT","urls":["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c","dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"]},"src/Swap.sol":{"keccak256":"0x879fbef67bfc409185e6d5e1ce6fcea2069b514eaf1beeebdc9cc3f4507e25ff","license":"MIT","urls":["bzz-raw://d8b622239b7ab42b9314fff83c1f1b5715e0b960249de4a464d66345f1a37153","dweb:/ipfs/QmcvmThx7ahMPhvPpsqFXpKL96j3hPs4vU7B2cHmS2TucS"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.23+commit.f704f362' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_usdc', type: 'address' },
            { internalType: 'address', name: '_delegate', type: 'address' },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          inputs: [
            { internalType: 'address', name: '_token', type: 'address' },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'approve',
        },
        {
          inputs: [
            { internalType: 'address', name: '_toToken', type: 'address' },
            { internalType: 'address', name: '_recipient', type: 'address' },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'swap',
        },
        {
          inputs: [
            { internalType: 'address', name: '_fromToken', type: 'address' },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'swapToUSDC',
        },
        {
          inputs: [],
          stateMutability: 'payable',
          type: 'function',
          name: 'swapToUSDC',
        },
      ],
      devdoc: { kind: 'dev', methods: {}, version: 1 },
      userdoc: { kind: 'user', methods: {}, version: 1 },
    },
    settings: {
      remappings: [
        '@chainlink/=lib/@chainlink/contracts-ccip/src/',
        '@chainlink/contracts-ccip/=lib/chainlink-local/lib/ccip/contracts/',
        '@chainlink/local/src/=lib/chainlink-local/src/',
        '@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/',
        'ccip/=lib/ccip/contracts/',
        'chainlink-local/=lib/chainlink-local/src/',
        'ds-test/=lib/chainlink-local/lib/forge-std/lib/ds-test/src/',
        'erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/',
        'forge-std/=lib/forge-std/src/',
        'openzeppelin-contracts/=lib/openzeppelin-contracts/',
      ],
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: 'ipfs' },
      compilationTarget: { 'src/Swap.sol': 'Swap' },
      evmVersion: 'paris',
      libraries: {},
    },
    sources: {
      'lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol': {
        keccak256:
          '0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70',
        urls: [
          'bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c',
          'dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq',
        ],
        license: 'MIT',
      },
      'src/Swap.sol': {
        keccak256:
          '0x879fbef67bfc409185e6d5e1ce6fcea2069b514eaf1beeebdc9cc3f4507e25ff',
        urls: [
          'bzz-raw://d8b622239b7ab42b9314fff83c1f1b5715e0b960249de4a464d66345f1a37153',
          'dweb:/ipfs/QmcvmThx7ahMPhvPpsqFXpKL96j3hPs4vU7B2cHmS2TucS',
        ],
        license: 'MIT',
      },
    },
    version: 1,
  },
  id: 21,
};