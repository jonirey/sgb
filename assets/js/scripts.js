 

function CargarMarzo(){
    document.getElementById("Ingresos").innerHTML = `<div class="mx-auto">
    <h6 class="text-muted">Ingresos Marzo</h6>
    <h3 class="font-weight-bold">$60000</h3>
    
    <input type="submit" onclick="CargarAbril()" value="Mes Siguiente" />
</div>`;
}

function CargarAbril(){
    document.getElementById("Ingresos").innerHTML = `<div class="mx-auto">
    <h6 class="text-muted">Ingresos Abril</h6>
    <h3 class="font-weight-bold">$50000</h3>
  
    <input type="submit" onclick="CargarMarzo()" value="Mes Anterior" />
</div>`;
}

function loading(){
  var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, { 
                type: 'bar',
                data: {
                    labels: ['Feb 2020', 'Mar 2020', 'Abr 2020', 'May 2020','junio 2020'],
                    datasets: [{
                        label: 'Nuevos clientes',
                        data: [50, 100, 150, 200, 350],
                        backgroundColor: [
                            '#12C9E5',  
                            '#12C9E5',
                            '#12C9E5',
                            '#12C9E5',
                            '#111B54',

                        ],
                        maxBarThickness: 30,
                        maxBarLength: 2
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
  
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Equipo', '%ingreso'],
      ['Desarrollo',     30000],
      ['comunicacion',      20000]]);

    var options = {
      title: 'Ingresos por equipo',
      chartArea:{left:0,top:0,width:'90%',height:'90%', margin:0, padding:0},
      legend: {position:'none'},
      'height':120
      
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  
  }

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart1);

  function drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Equipo', 'cantidad'],
      ['Desarrollo',     30],
      ['comunicacion',      50]]);

    var options = {
      title: 'Ingresos por equipo',
      chartArea:{left:0,top:0,width:'90%',height:'90%', margin:0, padding:0},
      legend: {position:'none'},
      'height':120,
      is3D:true
      
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

    chart.draw(data, options);
    
  }

 
}

function CargarChart()
{
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
        des =  parseInt(document.getElementById("desarrollo").value);
     comu =  parseInt(document.getElementById("comunicacion").value);


  
    function drawChart() {
  
      var data = google.visualization.arrayToDataTable([
        ['Equipo', '%ingreso'],
        ['Desarrollo',     des],
        ['comunicacion',      comu]
       
      ]);
  
      var options = {
        title: 'Ingresos por equipo',
        chartArea:{left:0,top:0,width:'90%',height:'90%', margin:0, padding:0},
        legend: {position:'none'},
        'height':120
        
        
      };
  
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  
      chart.draw(data, options);
    }

     

}

function agregarrubro(){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart1);
  let area =document.getElementById("nuevo_rubro").value;
  let cantidad_personas = document.getElementById("cantidad_personas").value;
  function drawChart1() {
    if(area!=null && cantidad_personas !=null){
      area = "'"+area+"'";
    var data = google.visualization.arrayToDataTable([
      ['Equipo', 'cantidad'],
      ['Desarrollo',     30],
      ['comunicacion',      50],
      [area ,  + cantidad_personas]
    ]);

  }
    var options = {
      title: 'Ingresos por equipo',
      chartArea:{left:0,top:0,width:'90%',height:'90%', margin:0, padding:0},
      legend: {position:'none'},
      'height':120,
      is3D:true
      
    };
    
     
    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

    chart.draw(data, options);
    let bot = document.getElementById("agregarrubro");
    bot.disabled =true;
  }





}

const swiper = new Swiper('.testimonial__container', {
  // Optional parameters
  spaceBetween:16,
  loop: true,
  grabCursor:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  breakpoints: {
      640:{
          slidesPerView:1,
      },
      1024:{
          slidesPerView:1,
      },
      
  }
});


function add_li()

{
    var nuevoLi=document.getElementById("nuevo_li").value;

    if(nuevoLi.length>0)

    {

        if(find_li(nuevoLi))

        {

            var li=document.createElement('li');

            li.id=nuevoLi;

            li.innerHTML=`<button class=" btn-light rounded " onclick="eliminar(this)">X </button>`+nuevoLi;

            document.getElementById("listaDesordenada").appendChild(li);

        }

    }

    return false;

}

function find_li(contenido)
{

    var el = document.getElementById("listaDesordenada").getElementsByTagName("li");

    for (var i=0; i<el.length; i++)

    {

        if(el[i].innerHTML==contenido)

            return false;

    }

    return true;

}

function eliminar(elemento)

{

    var id=elemento.parentNode.getAttribute("id");

    node=document.getElementById(id);

    node.parentNode.removeChild(node);

}

function cargarporcentaje(){

 let f2 = parseInt(document.getElementById("nuevoporcentaje").value);

document.getElementById("circle").innerHTML = f2+"%";

};

function agregartrabajo(){
  let nombre = document.getElementById("n_trabajo").value;
  let precio = document.getElementById("p_trabajo").value;
  

          var div=document.createElement('div');

          div.id='nuevodiv';

          div.innerHTML=`   <div   class="d-flex border-bottom py-2">
          <div class="d-flex mr-3">
            <h2 class="align-self-center mb-0"><i class="icon ion-md-pricetag"></i></h2>
          </div>
          <div class="align-self-center">
            <h6 class="d-inline-block mb-0">`+precio+`</h6><span class="badge badge-success ml-2">Concluido!</span>
            <small class="d-block text-muted">`+nombre+`</small>
          </div>
      </div>`;

          document.getElementById("trabajos").appendChild(div);

      }

      function Ocultar(){

        let canvas =document.getElementById("nuevosclientes").style;
        if (canvas.visibility=="hidden")
        {
        canvas.visibility="visible";
      }
      else
      {
        canvas.visibility="hidden";
      }
      }

  

