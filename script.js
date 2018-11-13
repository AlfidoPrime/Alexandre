function valida(elemento){
	var valida = true;
	
	if (elemento.value == "") valida = false;
	
	switch(elemento.id){
		case 'nome':
			if (elemento.value.length < 3) valida = false;
			if (elemento.value.length > 40) valida = false;
			break;
		case 'email':
			if (elemento.value.indexOf('@') == -1) valida = false;
			if (elemento.value.indexOf('.') == -1) valida = false;
			break;
		case 'mensagem':
			if (elemento.value.length > 150) valida = false;
			break;
	}
	
	if(valida){
		elemento.classList.add("valid");
		elemento.classList.remove("invalid");
	}else{
		elemento.classList.add("invalid");
		elemento.classList.remove("valid");
	}
}

function enviardados(){
	var nome = document.getElementById('nome');
	var email = document.getElementById('email');
	var mensagem = document.getElementById('mensagem');
	
	valida(nome);
	valida(email);
	valida(mensagem);
	
	if(nome.classList.contains('invalid'))
	{
		alert( "Preencha o NOME corretamente!\nMínimo 3 caracteres e Máximo de 40." );
		nome.focus();
		return false;
	}
	
	if(email.classList.contains('invalid'))
	{
		alert( "Preencha E-mail corretamente!\nEscreva um e-mail válido." );
		email.focus();
		return false;
	}
	
	if(mensagem.classList.contains('invalid'))
	{
		alert( "Escreva sua Mensagem!\nMáximo de 150 caracteres." );
		mensagem.focus();
		return false;
	}
	
		alert( "Sua Mensagem foi enviada.\nEm breve entrarei em contato.\nObrigado" );
		mensagem.focus();
		return true;
		
		
}