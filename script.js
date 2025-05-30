// Contract Configuration
const CONFIG = {
    testnet: {
        vnstSwapAddress: "0xC6E79493E6aF25B2709c45baA451E267394daA70", // Replace with testnet contract address
        vnstTokenAddress: "0x426Ad21059d6122A0093D836fc1FBCE47A2b4d5E", // Replace with testnet VNST address
        usdtTokenAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd", // Replace with testnet USDT address
        chainId: "0x61", // BSC Testnet chain ID
        rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/"
    },
    mainnet: {
        vnstSwapAddress: "0x...", // Replace with mainnet contract address
        vnstTokenAddress: "0x...", // Replace with mainnet VNST address
        usdtTokenAddress: "0x...", // Replace with mainnet USDT address
        chainId: "0x38", // BSC Mainnet chain ID
        rpcUrl: "https://bsc-dataseed.binance.org/"
    }
};

// Global variables
let web3;
let swapContract;
let vnstToken;
let usdtToken;
let currentNetwork = 'testnet';
let currentAccount = null;

// Initialize application
async function initApp() {
    await setupEventListeners();
    await checkWalletConnection();
    await initContracts();
    updateUI();
}

// Setup event listeners
async function setupEventListeners() {
    document.getElementById('connectWalletBtn').addEventListener('click', connectWallet);
    document.getElementById('getQuoteBtn').addEventListener('click', getQuote);
    document.getElementById('approveBtn').addEventListener('click', approveUSDT);
    document.getElementById('buyBtn').addEventListener('click', buyVNST);
    document.getElementById('copyContractBtn').addEventListener('click', copyContractAddress);
    
    document.querySelectorAll('.network-btn').forEach(btn => {
        btn.addEventListener('click', switchNetwork);
    });
}

// Check if wallet is already connected
async function checkWalletConnection() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                currentAccount = accounts[0];
                await setupWalletEvents();
            }
        } catch (error) {
            console.error("Error checking wallet connection:", error);
        }
    }
}

// Setup wallet event listeners (EIP-1193 compliant)
async function setupWalletEvents() {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            currentAccount = accounts.length > 0 ? accounts[0] : null;
            updateUI();
        });
        
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
        
        window.ethereum.on('disconnect', (error) => {
            console.log('Wallet disconnected:', error);
            currentAccount = null;
            updateUI();
        });
    }
}

// Connect wallet
async function connectWallet() {
    if (!window.ethereum) {
        showMessage('Please install MetaMask or another Web3 wallet', 'error');
        return;
    }

    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        currentAccount = accounts[0];
        await setupWalletEvents();
        
        // Update wallet info
        const usdtDecimals = await usdtToken.methods.decimals().call();
        const balance = await usdtToken.methods.balanceOf(currentAccount).call();
        
        document.getElementById('walletAddress').textContent = shortenAddress(currentAccount);
        document.getElementById('usdtBalance').textContent = formatUnits(balance, usdtDecimals);
        document.getElementById('walletInfo').classList.remove('hidden');
        
        showMessage('Wallet connected successfully', 'success');
        updateUI();
    } catch (error) {
        if (error.code === 4001) {
            showMessage('User rejected connection request', 'error');
        } else {
            showMessage(`Error connecting wallet: ${error.message}`, 'error');
        }
        console.error('Wallet connection error:', error);
    }
}

// Initialize contracts
async function initContracts() {
    try {
        const config = CONFIG[currentNetwork];
        
        // Initialize Web3
        web3 = new Web3(window.ethereum || config.rpcUrl);
        
        // Load contract ABIs (replace with your actual ABIs)
        const swapABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_sellerWallet","type":"address"},{"internalType":"address","name":"_usdtReceiver","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"required","type":"uint256"}],"name":"BuyerAllowanceLow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMinBuy","type":"uint256"}],"name":"MinBuyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newReceiver","type":"address"}],"name":"ReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"required","type":"uint256"}],"name":"SellerAllowanceLow","type":"event"},{"anonymous":false,"inputs":[],"name":"SwapPaused","type":"event"},{"anonymous":false,"inputs":[],"name":"SwapResumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vnstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rateUsed","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"calculateUsdtRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"getBuyerAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerVNST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"usdtRequired","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSellerAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"isApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSellerApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resumeSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint8","name":"fromDecimals","type":"uint8"},{"internalType":"uint8","name":"toDecimals","type":"uint8"}],"name":"scaleDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"sellerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPurchased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMinBuy","type":"uint256"}],"name":"updateMinBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"updateReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
        const tokenABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
        
        // Initialize contracts
        swapContract = new web3.eth.Contract(swapABI, config.vnstSwapAddress);
        vnstToken = new web3.eth.Contract(tokenABI, config.vnstTokenAddress);
        usdtToken = new web3.eth.Contract(tokenABI, config.usdtTokenAddress);
        
        // Load contract data
        await loadContractData();
    } catch (error) {
        showMessage(`Error initializing contracts: ${error.message}`, 'error');
        console.error('Contract initialization error:', error);
    }
}

// Load contract data
async function loadContractData() {
    try {
        // Get VNST price
        const price = await swapContract.methods.getPricePerVNST().call();
        document.getElementById('vnstPrice').textContent = `${price / 1e18} USDT`;
        
        // Get available VNST
        const sellerWallet = await swapContract.methods.sellerWallet().call();
        const availableVNST = await vnstToken.methods.balanceOf(sellerWallet).call();
        const vnstDecimals = await vnstToken.methods.decimals().call();
        document.getElementById('availableVNST').textContent = `${formatUnits(availableVNST, vnstDecimals)} VNST`;
        
        // Get VNST contract address
        document.getElementById('vnstContract').textContent = await swapContract.methods.vnstToken().call();
    } catch (error) {
        showMessage(`Error loading contract data: ${error.message}`, 'error');
        console.error('Contract data loading error:', error);
    }
}

// Get quote for VNST purchase
async function getQuote() {
    try {
        const vnstAmount = document.getElementById('vnstAmount').value;
        if (!vnstAmount || isNaN(vnstAmount) || Number(vnstAmount) < 100) {
            showMessage('Minimum purchase is 100 VNST', 'error');
            return;
        }
        
        const usdtAmount = await swapContract.methods.getQuote(vnstAmount).call();
        const usdtDecimals = await usdtToken.methods.decimals().call();
        
        document.getElementById('usdtAmount').textContent = formatUnits(usdtAmount, usdtDecimals);
        document.getElementById('quoteResult').classList.remove('hidden');
        
        // Check approval status
        const isApproved = await checkApprovalStatus();
        document.getElementById('approveBtn').disabled = isApproved;
        document.getElementById('buyBtn').disabled = !isApproved;
        
    } catch (error) {
        showMessage(`Error getting quote: ${error.message}`, 'error');
        console.error('Get quote error:', error);
    }
}

// Check USDT approval status
async function checkApprovalStatus() {
    try {
        const requiredAllowance = await calculateRequiredAllowance();
        const currentAllowance = await usdtToken.methods.allowance(currentAccount, CONFIG[currentNetwork].vnstSwapAddress).call();
        return BigInt(currentAllowance) >= BigInt(requiredAllowance);
    } catch (error) {
        console.error('Approval check error:', error);
        return false;
    }
}

// Calculate required USDT allowance
async function calculateRequiredAllowance() {
    const vnstAmount = document.getElementById('vnstAmount').value || '0';
    return await swapContract.methods.getQuote(vnstAmount).call();
}

// Approve USDT spending
async function approveUSDT() {
    try {
        const requiredAllowance = await calculateRequiredAllowance();
        
        await handleTransaction(
            usdtToken.methods.approve(
                CONFIG[currentNetwork].vnstSwapAddress,
                requiredAllowance
            ).send({ from: currentAccount }),
            'USDT approved successfully!'
        );
        
        document.getElementById('approveBtn').disabled = true;
        document.getElementById('buyBtn').disabled = false;
    } catch (error) {
        // Error handled by handleTransaction
    }
}

// Buy VNST tokens
async function buyVNST() {
    try {
        const vnstAmount = document.getElementById('vnstAmount').value;
        if (!vnstAmount || isNaN(vnstAmount) || Number(vnstAmount) < 100) {
            showMessage('Minimum purchase is 100 VNST', 'error');
            return;
        }
        
        await handleTransaction(
            swapContract.methods.buyVNST(vnstAmount).send({ from: currentAccount }),
            'VNST purchased successfully!'
        );
        
        // Refresh data
        await loadContractData();
        updateUI();
    } catch (error) {
        // Error handled by handleTransaction
    }
}

// Handle transactions with proper error handling
async function handleTransaction(transactionPromise, successMessage) {
    try {
        showMessage('Processing transaction...', 'status');
        await transactionPromise;
        showMessage(successMessage, 'success');
    } catch (error) {
        if (error.code === 4001) {
            showMessage('Transaction cancelled by user', 'error');
        } else {
            showMessage(`Transaction failed: ${error.message}`, 'error');
        }
        console.error('Transaction error:', error);
        throw error;
    }
}

// Switch between networks
async function switchNetwork(e) {
    const network = e.target.dataset.network;
    if (network === currentNetwork) return;
    
    try {
        showMessage(`Switching to ${network}...`, 'status');
        
        // Update UI
        document.querySelectorAll('.network-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.network === network);
        });
        
        // Switch network in MetaMask
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CONFIG[network].chainId }],
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: CONFIG[network].chainId,
                            chainName: network === 'testnet' ? 'BSC Testnet' : 'BSC Mainnet',
                            nativeCurrency: {
                                name: 'BNB',
                                symbol: 'bnb',
                                decimals: 18
                            },
                            rpcUrls: [CONFIG[network].rpcUrl],
                            blockExplorerUrls: [network === 'testnet' ? 
                                'https://testnet.bscscan.com/' : 
                                'https://bscscan.com/']
                        }],
                    });
                } catch (addError) {
                    showMessage('Failed to add network to wallet', 'error');
                    return;
                }
            } else {
                showMessage('Failed to switch network', 'error');
                return;
            }
        }
        
        currentNetwork = network;
        await initContracts();
        updateUI();
        
        showMessage(`Switched to ${network} successfully`, 'success');
    } catch (error) {
        showMessage(`Error switching network: ${error.message}`, 'error');
        console.error('Network switch error:', error);
    }
}

// Copy contract address to clipboard
function copyContractAddress() {
    const address = document.getElementById('vnstContract').textContent;
    navigator.clipboard.writeText(address);
    showMessage('Contract address copied!', 'success');
}

// Update UI based on current state
function updateUI() {
    const isConnected = currentAccount !== null;
    
    document.getElementById('connectWalletBtn').textContent = isConnected ? 'Connected' : 'Connect Wallet';
    document.getElementById('walletInfo').classList.toggle('hidden', !isConnected);
    
    document.getElementById('getQuoteBtn').disabled = !isConnected;
    document.getElementById('approveBtn').disabled = true;
    document.getElementById('buyBtn').disabled = true;
}

// Helper functions
function formatUnits(value, decimals) {
    return (value / 10 ** decimals).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: decimals
    });
}

function shortenAddress(address) {
    return address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '';
}

function showMessage(message, type = 'status') {
    const statusDiv = document.getElementById('statusMessages');
    const messageElement = document.createElement('div');
    
    messageElement.textContent = message;
    messageElement.classList.add(`${type}-message`);
    
    // Clear previous messages
    while (statusDiv.firstChild) {
        statusDiv.removeChild(statusDiv.firstChild);
    }
    
    statusDiv.appendChild(messageElement);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Initialize the app
window.addEventListener('load', initApp);
