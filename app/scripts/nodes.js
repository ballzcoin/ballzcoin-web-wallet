"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	/*ETH: "ETH",
	ETC: "ETC",
	Ropsten: "ROPSTEN ETH",
	Kovan: "KOVAN ETH",
	Rinkeby: "RINKEBY ETH",
	EXP: "EXP",
	UBQ: "UBQ",
	POA: "POA",
	TOMO: "TOMO",
	ELLA: "ELLA",
	ETSC: "ETSC",
	EGEM: "EGEM",
	CLO: "CLO",
	MUSIC: "MUSIC",
	GO: "GO",
	EOSC: "EOSC",
	AKA: "AKA",
	ESN: "ESN",
	PIRL: "PIRL",
	ETHO: "ETHO",
	ATH: "ATH",
	ILT: "ILT",
  WEB: "WEB",
	MIX: "MIX",*/
	BALLZ: "BALLZ",
	Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	/*eth_mew: {
		name: "ETH",
		blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
		blockExplorerAddr: "https://etherscan.io/address/[[address]]",
		type: nodes.nodeTypes.ETH,
		eip155: true,
		chainId: 1,
		tokenList: require("./tokens/ethTokens.json"),
		abiList: require("./abiDefinitions/ethAbi.json"),
		service: "myetherwallet.com",
		lib: new nodes.customNode("https://api.myetherwallet.com/eth", "")
	},*/

	ballz: {
		name: "BALLZ",
		blockExplorerTX: "https://explorer.ballzcoin.org/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer.ballzcoin.org/addr/[[address]]",
		type: nodes.nodeTypes.BALLZ,
		eip155: true,
		chainId: 2025418852,
		tokenList: require("./tokens/ballzTokens.json"),
		abiList: require("./abiDefinitions/ballzAbi.json"),
		estimateGas: true,
		service: "ballzcoin.org",
		lib: new nodes.customNode("https://node.ballzcoin.org", "443")
	}
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
