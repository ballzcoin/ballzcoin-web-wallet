### Ballzcoin Web Wallet

The Ballzcoin Web Wallet is based on the MyEtherWallet source code. For detailed documentation, visit (https://github.com/kvhnuke/etherwallet).

Key Ballzcoin changes are:

- Disabling of wallet access methods that are not currently supported by Ballzcoin: Hardware wallets, MEW connect, MetaMask. The code has not been removed, just commented out. The features can easily be re-enabled in future, or by anybody who wants to compile their own version. 
- Removal of non-Ballzcoin nodes.
- Numerous changes to the text.

Note: The Chrome extension is also not currently supported, however it is automatically compiled and remains in the repository. Use at your own risk. 


### Users (non-developers)

Either visit (https://wallet.ballzcoin.org), or download the dist to your computer. You can either run it straight off your computer, or run from a non-internet connected machine, create a wallet completely offline and send transactions from the "Offline Transaction" page.

1. Go to (https://ballzcoin.org/wallet.html)
2. Click on the Ballzcoin Web Wallet download link.
3. Unzip it and double-click index.html.
4. Ballzcoin Web Wallet is now running entirely on your computer.

In case you are not familiar, you need to keep the entire folder in order to run the website, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the Ballzcoin Web Wallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.



### Modifying and Building From Source

Taken from the original MyEtherWallet readme: 

- Both the Chrome Extension and the MyEtherWallet.com are compiling from the same codebase. This code is found in the `app` folder. Don't touch the `dist` or `chrome-extension` folders.
- We use angular and bootstrap. We used to use jQuery and Bootstrap until it was converted in April 2016. If you wonder why some things are set up funky, that's why.
- The mercury branch is currently the active development branch. We then push the dist folder live to gh-pages, which then gets served to MyEtherWallet.com.
- We use npm / gulp for compiling. There is a lot of stuff happening in the compilation.

**Getting Started**

- Start by running `npm install`.
- Run `npm run dev`. Gulp will then watch & compile everything and then watch for changes to the HTML, JS, or CSS.
- For distribution, run `npm run dist`.

**Folder Structure**
- `fonts` and `images` get moved into their respective folders. This isn't watched via gulp so if you add an image or font, you need to run `gulp` again.
- `includes` are the pieces of the pages / the pages themselves. These are pretty self-explanatory and where you will make most frontend changes.
- `layouts` are the pages themselves. These basically take all the pieces of the pages and compile into one massive page. The navigation is also found here...sort of.
    * `index.html` is for MyEtherWallet.com.
    * `cx-wallet.html` is the main page for the Chrome Extension.
    * `embedded.html` is for https://www.myetherwallet.com/embedded.html.

- You can control what shows up on MyEtherWallet.com vs the Chrome Extension by using: `@@if (site === 'cx' )  {  ...  }` and `@@if (site === 'mew' ) { ... }`. Check out `sendTransaction.tpl` to see it in action. The former will only compile for the Chrome Extension. The latter only to MyEtherWallet.com.
- `embedded.html` is for embedding the wallet generation into third-party sites. [Read more about it and how to listen for the address generated here.](https://www.reddit.com/r/ethereum/comments/4gn37o/embeddable_myetherwallet_super_simple_wallet/)
- The wallet decrypt directives are at `scripts/directives/walletDecryptDrtv.js`. These show up on a lot of pages.
- The navigation is in `scripts/services/globalServices.js`. Again, we control which navigation items show up in which version of the site in this single file.
- As of September 2016, almost all the copy in the .tpl files are only there as placeholders. It all gets replaced via angular-translate. If you want to change some copy you need to do so in `scripts/translations/en.js` folder. You should also make a note about what you changed and move it to the top of the file so that we can make sure it gets translated if necessary.
- `styles` is all the less. It's a couple custom folders and bootstrap. This badly needs to be redone. Ugh.




#### MyEtherWallet.com & MyEtherWallet CX are licensed under The MIT License (MIT).
