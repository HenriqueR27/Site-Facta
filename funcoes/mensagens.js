
    function MensagemOK(titulo , msg)
    {
		Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: titulo+' - '+msg,
		  showConfirmButton: false,
		  timer: 1500
		})
    }
	
    function Msg_Aviso(titulo ,msg , botao , url , tipo)
    {
		Swal.fire({
		  position: 'center',
		  icon: tipo,
		  title: titulo+' - '+msg,
		  showConfirmButton: true,
		  confirmButtonText: '<a href="'+url+'">'+botao+'</a>'
		})
    }

    function Msg_Alerta(titulo ,msg , botao , tipo)
    {
		Swal.fire({
		  position: 'center',
		  icon: tipo,
		  title: titulo+' - '+msg,
		  showConfirmButton: true,
		  confirmButtonText: botao
		})
    }

    function Msg_Volta(titulo ,msg , botao , url , tipo)
    {
		Swal.fire({
		  position: 'center',
		  icon: tipo,
		  title: titulo+' - '+msg,
		  showConfirmButton: true,
		  confirmButtonText: '<a href="'+url+'">'+botao+'</a>'
		})
    }
	
	function Exibe_Filtros(tipo)
	{
		var div = document.getElementById(tipo);
		if (div.style.display === "none") 
		{
			div.style.visibility = "visible";
			div.style.display = "block"; 
		}
		else 
		{
			div.style.display = "none";
			div.style.visibility = "hidden";
		}
	}

    function download(arquivo) 
    {
      var iframe = document.getElementById('invisible');
      iframe.src = arquivo;
    }
    
    function downloadPDF(arquivo) 
    {
      window.open(arquivo, '_blank')
    }