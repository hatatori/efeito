// txt = "ok -[vamos ver#algo aqui]- não sei de -[nada#vamos]-"

function render(txt){
	// txt = "-[vamos ver#algo aqui]-"
	p = txt.split("#")
	x = `
	<div class='fora'>
	`+p[0].slice(2)+`
	<div class='tolltip'>
	`+p[1].slice(0,-2)+`
	</div>
	</div>
	`
	return x
}

function div2render(div){
	//estrutura
	txt = div.innerHTML
	a = txt.indexOf("-[")
	b = txt.indexOf("]-")+2
	c = txt.slice(a,b)
	d = render(c)
	txt.slice()
	div.innerHTML = txt.replace(/-\[.+?\]-/g,e=>render(e))
	div.onclick=function(e){
		console.log(this.classList.toggle("active"))
	}
}


window.onload=function(){
	ef = document.querySelectorAll(".efeito")
	for(i of ef){
		div2render(i)
	}
}