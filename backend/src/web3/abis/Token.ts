export const Token = {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: 'name', type: 'string', internalType: 'string' },
        { name: 'symbol', type: 'string', internalType: 'string' },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'allowance',
      inputs: [
        { name: 'owner', type: 'address', internalType: 'address' },
        { name: 'spender', type: 'address', internalType: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'approve',
      inputs: [
        { name: 'spender', type: 'address', internalType: 'address' },
        { name: 'value', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'balanceOf',
      inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'decimals',
      inputs: [],
      outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'name',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'symbol',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'totalSupply',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'transfer',
      inputs: [
        { name: 'to', type: 'address', internalType: 'address' },
        { name: 'value', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferFrom',
      inputs: [
        { name: 'from', type: 'address', internalType: 'address' },
        { name: 'to', type: 'address', internalType: 'address' },
        { name: 'value', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'Approval',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'spender',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Transfer',
      inputs: [
        {
          name: 'from',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        { name: 'to', type: 'address', indexed: true, internalType: 'address' },
        {
          name: 'value',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'ERC20InsufficientAllowance',
      inputs: [
        { name: 'spender', type: 'address', internalType: 'address' },
        { name: 'allowance', type: 'uint256', internalType: 'uint256' },
        { name: 'needed', type: 'uint256', internalType: 'uint256' },
      ],
    },
    {
      type: 'error',
      name: 'ERC20InsufficientBalance',
      inputs: [
        { name: 'sender', type: 'address', internalType: 'address' },
        { name: 'balance', type: 'uint256', internalType: 'uint256' },
        { name: 'needed', type: 'uint256', internalType: 'uint256' },
      ],
    },
    {
      type: 'error',
      name: 'ERC20InvalidApprover',
      inputs: [{ name: 'approver', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC20InvalidReceiver',
      inputs: [{ name: 'receiver', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC20InvalidSender',
      inputs: [{ name: 'sender', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC20InvalidSpender',
      inputs: [{ name: 'spender', type: 'address', internalType: 'address' }],
    },
  ],
  bytecode: {
    object:
      '0x60806040523480156200001157600080fd5b5060405162000d2c38038062000d2c8339810160408190526200003491620002d7565b81816003620000448382620003d2565b506004620000538282620003d2565b5050506200008d336200006b6200009560201b60201c565b6200007890600a620005b3565b6200008790620493e0620005cb565b6200009a565b5050620005fb565b601290565b6001600160a01b038216620000ca5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000d860008383620000dc565b5050565b6001600160a01b0383166200010b578060026000828254620000ff9190620005e5565b909155506200017f9050565b6001600160a01b03831660009081526020819052604090205481811015620001605760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000c1565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166200019d57600280548290039055620001bc565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200020291815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200023757600080fd5b81516001600160401b03808211156200025457620002546200020f565b604051601f8301601f19908116603f011681019082821181831017156200027f576200027f6200020f565b81604052838152602092508660208588010111156200029d57600080fd5b600091505b83821015620002c15785820183015181830184015290820190620002a2565b6000602085830101528094505050505092915050565b60008060408385031215620002eb57600080fd5b82516001600160401b03808211156200030357600080fd5b620003118683870162000225565b935060208501519150808211156200032857600080fd5b50620003378582860162000225565b9150509250929050565b600181811c908216806200035657607f821691505b6020821081036200037757634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003cd576000816000526020600020601f850160051c81016020861015620003a85750805b601f850160051c820191505b81811015620003c957828155600101620003b4565b5050505b505050565b81516001600160401b03811115620003ee57620003ee6200020f565b6200040681620003ff845462000341565b846200037d565b602080601f8311600181146200043e5760008415620004255750858301515b600019600386901b1c1916600185901b178555620003c9565b600085815260208120601f198616915b828110156200046f578886015182559484019460019091019084016200044e565b50858210156200048e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620004f5578160001904821115620004d957620004d96200049e565b80851615620004e757918102915b93841c9390800290620004b9565b509250929050565b6000826200050e57506001620005ad565b816200051d57506000620005ad565b8160018114620005365760028114620005415762000561565b6001915050620005ad565b60ff8411156200055557620005556200049e565b50506001821b620005ad565b5060208310610133831016604e8410600b841016171562000586575081810a620005ad565b620005928383620004b4565b8060001904821115620005a957620005a96200049e565b0290505b92915050565b6000620005c460ff841683620004fd565b9392505050565b8082028115828204841417620005ad57620005ad6200049e565b80820180821115620005ad57620005ad6200049e565b610721806200060b6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce567146100fe57806370a082311461010d57806395d89b4114610136578063a9059cbb1461013e578063dd62ed3e1461015157600080fd5b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100d957806323b872dd146100eb575b600080fd5b6100a061018a565b6040516100ad919061056a565b60405180910390f35b6100c96100c43660046105d5565b61021c565b60405190151581526020016100ad565b6002545b6040519081526020016100ad565b6100c96100f93660046105ff565b610236565b604051601281526020016100ad565b6100dd61011b36600461063b565b6001600160a01b031660009081526020819052604090205490565b6100a061025a565b6100c961014c3660046105d5565b610269565b6100dd61015f36600461065d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461019990610690565b80601f01602080910402602001604051908101604052809291908181526020018280546101c590610690565b80156102125780601f106101e757610100808354040283529160200191610212565b820191906000526020600020905b8154815290600101906020018083116101f557829003601f168201915b5050505050905090565b60003361022a818585610277565b60019150505b92915050565b600033610244858285610289565b61024f85858561030c565b506001949350505050565b60606004805461019990610690565b60003361022a81858561030c565b610284838383600161036b565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461030657818110156102f757604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6103068484848403600061036b565b50505050565b6001600160a01b03831661033657604051634b637e8f60e11b8152600060048201526024016102ee565b6001600160a01b0382166103605760405163ec442f0560e01b8152600060048201526024016102ee565b610284838383610440565b6001600160a01b0384166103955760405163e602df0560e01b8152600060048201526024016102ee565b6001600160a01b0383166103bf57604051634a1406b160e11b8152600060048201526024016102ee565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561030657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161043291815260200190565b60405180910390a350505050565b6001600160a01b03831661046b57806002600082825461046091906106ca565b909155506104dd9050565b6001600160a01b038316600090815260208190526040902054818110156104be5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016102ee565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166104f957600280548290039055610518565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161055d91815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156105985785810183015185820160400152820161057c565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146105d057600080fd5b919050565b600080604083850312156105e857600080fd5b6105f1836105b9565b946020939093013593505050565b60008060006060848603121561061457600080fd5b61061d846105b9565b925061062b602085016105b9565b9150604084013590509250925092565b60006020828403121561064d57600080fd5b610656826105b9565b9392505050565b6000806040838503121561067057600080fd5b610679836105b9565b9150610687602084016105b9565b90509250929050565b600181811c908216806106a457607f821691505b6020821081036106c457634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561023057634e487b7160e01b600052601160045260246000fdfea264697066735822122061eee5d555ab49481787dace441c77af99bc49795301016b12fed70571ad693164736f6c63430008170033',
    sourceMap:
      '144:167:25:-:0;;;174:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;234:4;240:6;1962:5:20;:13;234:4:25;1962:5:20;:13;:::i;:::-;-1:-1:-1;1985:7:20;:17;1995:7;1985;:17;:::i;:::-;;1896:113;;258:44:25::1;264:10;291;:8;;;:10;;:::i;:::-;285:16;::::0;:2:::1;:16;:::i;:::-;276:25;::::0;:6:::1;:25;:::i;:::-;258:5;:44::i;:::-;174:135:::0;;144:167;;3002:82:20;3075:2;;3002:82::o;7721:208::-;-1:-1:-1;;;;;7791:21:20;;7787:91;;7835:32;;-1:-1:-1;;;7835:32:20;;7864:1;7835:32;;;5970:51:26;5943:18;;7835:32:20;;;;;;;;7787:91;7887:35;7903:1;7907:7;7916:5;7887:7;:35::i;:::-;7721:208;;:::o;6271:1107::-;-1:-1:-1;;;;;6360:18:20;;6356:540;;6512:5;6496:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6356:540:20;;-1:-1:-1;6356:540:20;;-1:-1:-1;;;;;6570:15:20;;6548:19;6570:15;;;;;;;;;;;6603:19;;;6599:115;;;6649:50;;-1:-1:-1;;;6649:50:20;;-1:-1:-1;;;;;6382:32:26;;6649:50:20;;;6364:51:26;6431:18;;;6424:34;;;6474:18;;;6467:34;;;6337:18;;6649:50:20;6162:345:26;6599:115:20;-1:-1:-1;;;;;6834:15:20;;:9;:15;;;;;;;;;;6852:19;;;;6834:37;;6356:540;-1:-1:-1;;;;;6910:16:20;;6906:425;;7073:12;:21;;;;;;;6906:425;;;-1:-1:-1;;;;;7284:13:20;;:9;:13;;;;;;;;;;:22;;;;;;6906:425;7361:2;-1:-1:-1;;;;;7346:25:20;7355:4;-1:-1:-1;;;;;7346:25:20;;7365:5;7346:25;;;;6658::26;;6646:2;6631:18;;6512:177;7346:25:20;;;;;;;;6271:1107;;;:::o;14:127:26:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:844;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:26;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:26;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;732:3;725:4;720:2;712:6;708:15;704:26;701:35;698:55;;;749:1;746;739:12;698:55;771:1;762:10;;781:133;795:2;792:1;789:9;781:133;;;883:14;;;879:23;;873:30;852:14;;;848:23;;841:63;806:10;;;;781:133;;;958:1;951:4;946:2;938:6;934:15;930:26;923:37;978:6;969:15;;;;;;146:844;;;;:::o;995:562::-;1094:6;1102;1155:2;1143:9;1134:7;1130:23;1126:32;1123:52;;;1171:1;1168;1161:12;1123:52;1198:16;;-1:-1:-1;;;;;1263:14:26;;;1260:34;;;1290:1;1287;1280:12;1260:34;1313:61;1366:7;1357:6;1346:9;1342:22;1313:61;:::i;:::-;1303:71;;1420:2;1409:9;1405:18;1399:25;1383:41;;1449:2;1439:8;1436:16;1433:36;;;1465:1;1462;1455:12;1433:36;;1488:63;1543:7;1532:8;1521:9;1517:24;1488:63;:::i;:::-;1478:73;;;995:562;;;;;:::o;1562:380::-;1641:1;1637:12;;;;1684;;;1705:61;;1759:4;1751:6;1747:17;1737:27;;1705:61;1812:2;1804:6;1801:14;1781:18;1778:38;1775:161;;1858:10;1853:3;1849:20;1846:1;1839:31;1893:4;1890:1;1883:15;1921:4;1918:1;1911:15;1775:161;;1562:380;;;:::o;2073:543::-;2175:2;2170:3;2167:11;2164:446;;;2211:1;2235:5;2232:1;2225:16;2279:4;2276:1;2266:18;2349:2;2337:10;2333:19;2330:1;2326:27;2320:4;2316:38;2385:4;2373:10;2370:20;2367:47;;;-1:-1:-1;2408:4:26;2367:47;2463:2;2458:3;2454:12;2451:1;2447:20;2441:4;2437:31;2427:41;;2518:82;2536:2;2529:5;2526:13;2518:82;;;2581:17;;;2562:1;2551:13;2518:82;;;2522:3;;;2164:446;2073:543;;;:::o;2792:1345::-;2912:10;;-1:-1:-1;;;;;2934:30:26;;2931:56;;;2967:18;;:::i;:::-;2996:97;3086:6;3046:38;3078:4;3072:11;3046:38;:::i;:::-;3040:4;2996:97;:::i;:::-;3148:4;;3205:2;3194:14;;3222:1;3217:663;;;;3924:1;3941:6;3938:89;;;-1:-1:-1;3993:19:26;;;3987:26;3938:89;-1:-1:-1;;2749:1:26;2745:11;;;2741:24;2737:29;2727:40;2773:1;2769:11;;;2724:57;4040:81;;3187:944;;3217:663;2020:1;2013:14;;;2057:4;2044:18;;-1:-1:-1;;3253:20:26;;;3371:236;3385:7;3382:1;3379:14;3371:236;;;3474:19;;;3468:26;3453:42;;3566:27;;;;3534:1;3522:14;;;;3401:19;;3371:236;;;3375:3;3635:6;3626:7;3623:19;3620:201;;;3696:19;;;3690:26;-1:-1:-1;;3779:1:26;3775:14;;;3791:3;3771:24;3767:37;3763:42;3748:58;3733:74;;3620:201;-1:-1:-1;;;;;3867:1:26;3851:14;;;3847:22;3834:36;;-1:-1:-1;2792:1345:26:o;4142:127::-;4203:10;4198:3;4194:20;4191:1;4184:31;4234:4;4231:1;4224:15;4258:4;4255:1;4248:15;4274:416;4363:1;4400:5;4363:1;4414:270;4435:7;4425:8;4422:21;4414:270;;;4494:4;4490:1;4486:6;4482:17;4476:4;4473:27;4470:53;;;4503:18;;:::i;:::-;4553:7;4543:8;4539:22;4536:55;;;4573:16;;;;4536:55;4652:22;;;;4612:15;;;;4414:270;;;4418:3;4274:416;;;;;:::o;4695:806::-;4744:5;4774:8;4764:80;;-1:-1:-1;4815:1:26;4829:5;;4764:80;4863:4;4853:76;;-1:-1:-1;4900:1:26;4914:5;;4853:76;4945:4;4963:1;4958:59;;;;5031:1;5026:130;;;;4938:218;;4958:59;4988:1;4979:10;;5002:5;;;5026:130;5063:3;5053:8;5050:17;5047:43;;;5070:18;;:::i;:::-;-1:-1:-1;;5126:1:26;5112:16;;5141:5;;4938:218;;5240:2;5230:8;5227:16;5221:3;5215:4;5212:13;5208:36;5202:2;5192:8;5189:16;5184:2;5178:4;5175:12;5171:35;5168:77;5165:159;;;-1:-1:-1;5277:19:26;;;5309:5;;5165:159;5356:34;5381:8;5375:4;5356:34;:::i;:::-;5426:6;5422:1;5418:6;5414:19;5405:7;5402:32;5399:58;;;5437:18;;:::i;:::-;5475:20;;-1:-1:-1;4695:806:26;;;;;:::o;5506:140::-;5564:5;5593:47;5634:4;5624:8;5620:19;5614:4;5593:47;:::i;:::-;5584:56;5506:140;-1:-1:-1;;;5506:140:26:o;5651:168::-;5724:9;;;5755;;5772:15;;;5766:22;;5752:37;5742:71;;5793:18;;:::i;6032:125::-;6097:9;;;6118:10;;;6115:36;;;6131:18;;:::i;6512:177::-;144:167:25;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce567146100fe57806370a082311461010d57806395d89b4114610136578063a9059cbb1461013e578063dd62ed3e1461015157600080fd5b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100d957806323b872dd146100eb575b600080fd5b6100a061018a565b6040516100ad919061056a565b60405180910390f35b6100c96100c43660046105d5565b61021c565b60405190151581526020016100ad565b6002545b6040519081526020016100ad565b6100c96100f93660046105ff565b610236565b604051601281526020016100ad565b6100dd61011b36600461063b565b6001600160a01b031660009081526020819052604090205490565b6100a061025a565b6100c961014c3660046105d5565b610269565b6100dd61015f36600461065d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461019990610690565b80601f01602080910402602001604051908101604052809291908181526020018280546101c590610690565b80156102125780601f106101e757610100808354040283529160200191610212565b820191906000526020600020905b8154815290600101906020018083116101f557829003601f168201915b5050505050905090565b60003361022a818585610277565b60019150505b92915050565b600033610244858285610289565b61024f85858561030c565b506001949350505050565b60606004805461019990610690565b60003361022a81858561030c565b610284838383600161036b565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461030657818110156102f757604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6103068484848403600061036b565b50505050565b6001600160a01b03831661033657604051634b637e8f60e11b8152600060048201526024016102ee565b6001600160a01b0382166103605760405163ec442f0560e01b8152600060048201526024016102ee565b610284838383610440565b6001600160a01b0384166103955760405163e602df0560e01b8152600060048201526024016102ee565b6001600160a01b0383166103bf57604051634a1406b160e11b8152600060048201526024016102ee565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561030657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161043291815260200190565b60405180910390a350505050565b6001600160a01b03831661046b57806002600082825461046091906106ca565b909155506104dd9050565b6001600160a01b038316600090815260208190526040902054818110156104be5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016102ee565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166104f957600280548290039055610518565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161055d91815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156105985785810183015185820160400152820161057c565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146105d057600080fd5b919050565b600080604083850312156105e857600080fd5b6105f1836105b9565b946020939093013593505050565b60008060006060848603121561061457600080fd5b61061d846105b9565b925061062b602085016105b9565b9150604084013590509250925092565b60006020828403121561064d57600080fd5b610656826105b9565b9392505050565b6000806040838503121561067057600080fd5b610679836105b9565b9150610687602084016105b9565b90509250929050565b600181811c908216806106a457607f821691505b6020821081036106c457634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561023057634e487b7160e01b600052601160045260246000fdfea264697066735822122061eee5d555ab49481787dace441c77af99bc49795301016b12fed70571ad693164736f6c63430008170033',
    sourceMap:
      '144:167:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2074:89:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4293:186;;;;;;:::i;:::-;;:::i;:::-;;;1169:14:26;;1162:22;1144:41;;1132:2;1117:18;4293:186:20;1004:187:26;3144:97:20;3222:12;;3144:97;;;1342:25:26;;;1330:2;1315:18;3144:97:20;1196:177:26;5039:244:20;;;;;;:::i;:::-;;:::i;3002:82::-;;;3075:2;1853:36:26;;1841:2;1826:18;3002:82:20;1711:184:26;3299:116:20;;;;;;:::i;:::-;-1:-1:-1;;;;;3390:18:20;3364:7;3390:18;;;;;;;;;;;;3299:116;2276:93;;;:::i;3610:178::-;;;;;;:::i;:::-;;:::i;3846:140::-;;;;;;:::i;:::-;-1:-1:-1;;;;;3952:18:20;;;3926:7;3952:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3846:140;2074:89;2119:13;2151:5;2144:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2074:89;:::o;4293:186::-;4366:4;735:10:23;4420:31:20;735:10:23;4436:7:20;4445:5;4420:8;:31::i;:::-;4468:4;4461:11;;;4293:186;;;;;:::o;5039:244::-;5126:4;735:10:23;5182:37:20;5198:4;735:10:23;5213:5:20;5182:15;:37::i;:::-;5229:26;5239:4;5245:2;5249:5;5229:9;:26::i;:::-;-1:-1:-1;5272:4:20;;5039:244;-1:-1:-1;;;;5039:244:20:o;2276:93::-;2323:13;2355:7;2348:14;;;;;:::i;3610:178::-;3679:4;735:10:23;3733:27:20;735:10:23;3750:2:20;3754:5;3733:9;:27::i;8989:128::-;9073:37;9082:5;9089:7;9098:5;9105:4;9073:8;:37::i;:::-;8989:128;;;:::o;10663:477::-;-1:-1:-1;;;;;3952:18:20;;;10762:24;3952:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;-1:-1:-1;;10828:37:20;;10824:310;;10904:5;10885:16;:24;10881:130;;;10936:60;;-1:-1:-1;;;10936:60:20;;-1:-1:-1;;;;;2961:32:26;;10936:60:20;;;2943:51:26;3010:18;;;3003:34;;;3053:18;;;3046:34;;;2916:18;;10936:60:20;;;;;;;;10881:130;11052:57;11061:5;11068:7;11096:5;11077:16;:24;11103:5;11052:8;:57::i;:::-;10752:388;10663:477;;;:::o;5656:300::-;-1:-1:-1;;;;;5739:18:20;;5735:86;;5780:30;;-1:-1:-1;;;5780:30:20;;5807:1;5780:30;;;3237:51:26;3210:18;;5780:30:20;3091:203:26;5735:86:20;-1:-1:-1;;;;;5834:16:20;;5830:86;;5873:32;;-1:-1:-1;;;5873:32:20;;5902:1;5873:32;;;3237:51:26;3210:18;;5873:32:20;3091:203:26;5830:86:20;5925:24;5933:4;5939:2;5943:5;5925:7;:24::i;9949:432::-;-1:-1:-1;;;;;10061:19:20;;10057:89;;10103:32;;-1:-1:-1;;;10103:32:20;;10132:1;10103:32;;;3237:51:26;3210:18;;10103:32:20;3091:203:26;10057:89:20;-1:-1:-1;;;;;10159:21:20;;10155:90;;10203:31;;-1:-1:-1;;;10203:31:20;;10231:1;10203:31;;;3237:51:26;3210:18;;10203:31:20;3091:203:26;10155:90:20;-1:-1:-1;;;;;10254:18:20;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;:35;;;10299:76;;;;10349:7;-1:-1:-1;;;;;10333:31:20;10342:5;-1:-1:-1;;;;;10333:31:20;;10358:5;10333:31;;;;1342:25:26;;1330:2;1315:18;;1196:177;10333:31:20;;;;;;;;9949:432;;;;:::o;6271:1107::-;-1:-1:-1;;;;;6360:18:20;;6356:540;;6512:5;6496:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6356:540:20;;-1:-1:-1;6356:540:20;;-1:-1:-1;;;;;6570:15:20;;6548:19;6570:15;;;;;;;;;;;6603:19;;;6599:115;;;6649:50;;-1:-1:-1;;;6649:50:20;;-1:-1:-1;;;;;2961:32:26;;6649:50:20;;;2943:51:26;3010:18;;;3003:34;;;3053:18;;;3046:34;;;2916:18;;6649:50:20;2741:345:26;6599:115:20;-1:-1:-1;;;;;6834:15:20;;:9;:15;;;;;;;;;;6852:19;;;;6834:37;;6356:540;-1:-1:-1;;;;;6910:16:20;;6906:425;;7073:12;:21;;;;;;;6906:425;;;-1:-1:-1;;;;;7284:13:20;;:9;:13;;;;;;;;;;:22;;;;;;6906:425;7361:2;-1:-1:-1;;;;;7346:25:20;7355:4;-1:-1:-1;;;;;7346:25:20;;7365:5;7346:25;;;;1342::26;;1330:2;1315:18;;1196:177;7346:25:20;;;;;;;;6271:1107;;;:::o;14:548:26:-;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:173::-;635:20;;-1:-1:-1;;;;;684:31:26;;674:42;;664:70;;730:1;727;720:12;664:70;567:173;;;:::o;745:254::-;813:6;821;874:2;862:9;853:7;849:23;845:32;842:52;;;890:1;887;880:12;842:52;913:29;932:9;913:29;:::i;:::-;903:39;989:2;974:18;;;;961:32;;-1:-1:-1;;;745:254:26:o;1378:328::-;1455:6;1463;1471;1524:2;1512:9;1503:7;1499:23;1495:32;1492:52;;;1540:1;1537;1530:12;1492:52;1563:29;1582:9;1563:29;:::i;:::-;1553:39;;1611:38;1645:2;1634:9;1630:18;1611:38;:::i;:::-;1601:48;;1696:2;1685:9;1681:18;1668:32;1658:42;;1378:328;;;;;:::o;1900:186::-;1959:6;2012:2;2000:9;1991:7;1987:23;1983:32;1980:52;;;2028:1;2025;2018:12;1980:52;2051:29;2070:9;2051:29;:::i;:::-;2041:39;1900:186;-1:-1:-1;;;1900:186:26:o;2091:260::-;2159:6;2167;2220:2;2208:9;2199:7;2195:23;2191:32;2188:52;;;2236:1;2233;2226:12;2188:52;2259:29;2278:9;2259:29;:::i;:::-;2249:39;;2307:38;2341:2;2330:9;2326:18;2307:38;:::i;:::-;2297:48;;2091:260;;;;;:::o;2356:380::-;2435:1;2431:12;;;;2478;;;2499:61;;2553:4;2545:6;2541:17;2531:27;;2499:61;2606:2;2598:6;2595:14;2575:18;2572:38;2569:161;;2652:10;2647:3;2643:20;2640:1;2633:31;2687:4;2684:1;2677:15;2715:4;2712:1;2705:15;2569:161;;2356:380;;;:::o;3299:222::-;3364:9;;;3385:10;;;3382:133;;;3437:10;3432:3;3428:20;3425:1;3418:31;3472:4;3469:1;3462:15;3500:4;3497:1;3490:15',
    linkReferences: {},
  },
  methodIdentifiers: {
    'allowance(address,address)': 'dd62ed3e',
    'approve(address,uint256)': '095ea7b3',
    'balanceOf(address)': '70a08231',
    'decimals()': '313ce567',
    'name()': '06fdde03',
    'symbol()': '95d89b41',
    'totalSupply()': '18160ddd',
    'transfer(address,uint256)': 'a9059cbb',
    'transferFrom(address,address,uint256)': '23b872dd',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.23+commit.f704f362"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"errors":{"ERC20InsufficientAllowance(address,uint256,uint256)":[{"details":"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.","params":{"allowance":"Amount of tokens a `spender` is allowed to operate with.","needed":"Minimum amount required to perform a transfer.","spender":"Address that may be allowed to operate on tokens without being their owner."}}],"ERC20InsufficientBalance(address,uint256,uint256)":[{"details":"Indicates an error related to the current `balance` of a `sender`. Used in transfers.","params":{"balance":"Current balance for the interacting account.","needed":"Minimum amount required to perform a transfer.","sender":"Address whose tokens are being transferred."}}],"ERC20InvalidApprover(address)":[{"details":"Indicates a failure with the `approver` of a token to be approved. Used in approvals.","params":{"approver":"Address initiating an approval operation."}}],"ERC20InvalidReceiver(address)":[{"details":"Indicates a failure with the token `receiver`. Used in transfers.","params":{"receiver":"Address to which tokens are being transferred."}}],"ERC20InvalidSender(address)":[{"details":"Indicates a failure with the token `sender`. Used in transfers.","params":{"sender":"Address whose tokens are being transferred."}}],"ERC20InvalidSpender(address)":[{"details":"Indicates a failure with the `spender` to be approved. Used in approvals.","params":{"spender":"Address that may be allowed to operate on tokens without being their owner."}}]},"events":{"Approval(address,address,uint256)":{"details":"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."},"Transfer(address,address,uint256)":{"details":"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."}},"kind":"dev","methods":{"allowance(address,address)":{"details":"See {IERC20-allowance}."},"approve(address,uint256)":{"details":"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."},"balanceOf(address)":{"details":"See {IERC20-balanceOf}."},"decimals()":{"details":"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it\'s overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."},"name()":{"details":"Returns the name of the token."},"symbol()":{"details":"Returns the symbol of the token, usually a shorter version of the name."},"totalSupply()":{"details":"See {IERC20-totalSupply}."},"transfer(address,uint256)":{"details":"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."},"transferFrom(address,address,uint256)":{"details":"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``\'s tokens of at least `value`."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/Token.sol":"Token"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@chainlink/=lib/@chainlink/contracts-ccip/src/",":@chainlink/contracts-ccip/=lib/chainlink-local/lib/ccip/contracts/",":@chainlink/local/src/=lib/chainlink-local/src/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":ccip/=lib/ccip/contracts/",":chainlink-local/=lib/chainlink-local/src/",":ds-test/=lib/chainlink-local/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol":{"keccak256":"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7","license":"MIT","urls":["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f","dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"]},"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80","license":"MIT","urls":["bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229","dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70","license":"MIT","urls":["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c","dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2","license":"MIT","urls":["bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850","dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"src/Token.sol":{"keccak256":"0xbfb872e4e43c75821900f73af20605817d29fc48c65856c7b2032b8a4badbdb8","license":"MIT","urls":["bzz-raw://a0809402745fd092e4bb831095d1eb9dd01460ff2223cc60aeddafa22ad0749a","dweb:/ipfs/QmSGF6yZAWLXRh6egkHaLxRd3ViPGgkHNmCEtX71G7CtSy"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.23+commit.f704f362' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'symbol', type: 'string' },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'allowance', type: 'uint256' },
            { internalType: 'uint256', name: 'needed', type: 'uint256' },
          ],
          type: 'error',
          name: 'ERC20InsufficientAllowance',
        },
        {
          inputs: [
            { internalType: 'address', name: 'sender', type: 'address' },
            { internalType: 'uint256', name: 'balance', type: 'uint256' },
            { internalType: 'uint256', name: 'needed', type: 'uint256' },
          ],
          type: 'error',
          name: 'ERC20InsufficientBalance',
        },
        {
          inputs: [
            { internalType: 'address', name: 'approver', type: 'address' },
          ],
          type: 'error',
          name: 'ERC20InvalidApprover',
        },
        {
          inputs: [
            { internalType: 'address', name: 'receiver', type: 'address' },
          ],
          type: 'error',
          name: 'ERC20InvalidReceiver',
        },
        {
          inputs: [
            { internalType: 'address', name: 'sender', type: 'address' },
          ],
          type: 'error',
          name: 'ERC20InvalidSender',
        },
        {
          inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
          ],
          type: 'error',
          name: 'ERC20InvalidSpender',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
              indexed: false,
            },
          ],
          type: 'event',
          name: 'Approval',
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
              indexed: false,
            },
          ],
          type: 'event',
          name: 'Transfer',
          anonymous: false,
        },
        {
          inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'allowance',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        },
        {
          inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'approve',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        },
        {
          inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'balanceOf',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'decimals',
          outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'name',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'symbol',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'totalSupply',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        },
        {
          inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'transfer',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        },
        {
          inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'transferFrom',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {
          'allowance(address,address)': { details: 'See {IERC20-allowance}.' },
          'approve(address,uint256)': {
            details:
              'See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.',
          },
          'balanceOf(address)': { details: 'See {IERC20-balanceOf}.' },
          'decimals()': {
            details:
              "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.",
          },
          'name()': { details: 'Returns the name of the token.' },
          'symbol()': {
            details:
              'Returns the symbol of the token, usually a shorter version of the name.',
          },
          'totalSupply()': { details: 'See {IERC20-totalSupply}.' },
          'transfer(address,uint256)': {
            details:
              'See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.',
          },
          'transferFrom(address,address,uint256)': {
            details:
              "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.",
          },
        },
        version: 1,
      },
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
      compilationTarget: { 'src/Token.sol': 'Token' },
      evmVersion: 'paris',
      libraries: {},
    },
    sources: {
      'lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol': {
        keccak256:
          '0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7',
        urls: [
          'bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f',
          'dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol': {
        keccak256:
          '0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80',
        urls: [
          'bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229',
          'dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol': {
        keccak256:
          '0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70',
        urls: [
          'bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c',
          'dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol':
        {
          keccak256:
            '0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2',
          urls: [
            'bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850',
            'dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV',
          ],
          license: 'MIT',
        },
      'lib/openzeppelin-contracts/contracts/utils/Context.sol': {
        keccak256:
          '0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2',
        urls: [
          'bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12',
          'dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF',
        ],
        license: 'MIT',
      },
      'src/Token.sol': {
        keccak256:
          '0xbfb872e4e43c75821900f73af20605817d29fc48c65856c7b2032b8a4badbdb8',
        urls: [
          'bzz-raw://a0809402745fd092e4bb831095d1eb9dd01460ff2223cc60aeddafa22ad0749a',
          'dweb:/ipfs/QmSGF6yZAWLXRh6egkHaLxRd3ViPGgkHNmCEtX71G7CtSy',
        ],
        license: 'MIT',
      },
    },
    version: 1,
  },
  id: 25,
};
