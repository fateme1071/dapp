
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";


export const ConnectContext = createContext();

 const ConnectContextProvider=({children})=>{
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const conectWalletHandler=()=>{
    if (window.ethereum && window.ethereum.isMetaMask) {
		

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
                console.log(result[0]);
			})
			.catch(error => {
                console.log(error.message)
				setErrorMessage(error.message);
			});

		} else {
		
			setErrorMessage('Please install MetaMask  extension to interact');
		}
	}
  const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}
  const getAccountBalance = (account) => {
    window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
    .then(balance => {
        if(ethers.utils.formatEther(balance)<=0) navigate('/tokenPage')
        else navigate('/profile')
        setUserBalance(ethers.utils.formatEther(balance));
    })
    .catch(error => {
        setErrorMessage(error.message);
    });
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}
    window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
    return(
      
            <ConnectContext.Provider value={{connButtonText,errorMessage, defaultAccount, userBalance,conectWalletHandler,defaultAccount,userBalance }}>
              {children}
            </ConnectContext.Provider>

    )
}

export default ConnectContextProvider;