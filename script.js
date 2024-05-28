//import languageList from './language-list';
const codes = document.querySelectorAll("code.sourceCode");

codes.forEach( code => {
	/*code.classList.forEach( langCode => {
	  	if(c=="sourceCode") return;
		code.classList.remove(langCode);
		code.classList.add("language-"+langCode);
	});*/
	code.innerHTML = code.textContent;
});
