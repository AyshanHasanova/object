const telebeler = [
    {   row : "1",
        ad : "Aysen",
        age : 21,
        isEducated : true
    },
    {   row : "2",
        ad : "Sabina",
        age : 20,
        isEducated : true
    },
    {   row : "3",
        ad : "Fuad",
        age : 32,
        isEducated : false
    },
    {   row : " 4",
        ad : "Asya",
        age : 27,
        isEducated : true
    },
    {   row: "5",
        ad : "Lale",
        age : 19,
        isEducated : true
    },
    {   row : "6",
        ad : "Hesen",
        age : 43,
        isEducated : false
    },

]


const telebeCedveli = document.querySelector (".table")

telebeler.forEach(function(birTelebe){
    
telebeCedveli.innerHTML += `
   <tr>
            <th scope="row">${birTelebe.row}</th>
            <td>${birTelebe.ad}</td>
            <td>${birTelebe.age}</td>
            <td>${birTelebe.isEducated}</td>
          </tr>
`
    
});

const rows = document.querySelectorAll(".table tr")

rows.forEach((sira,index) =>{
  if (index === 0) return;
  const isEducatedCell = sira.cells [3];
  if (isEducatedCell.textContent.trim()==='false'){
    isEducatedCell.style.color = 'red'
  }
  if (isEducatedCell.textContent.trim()==='true'){
    isEducatedCell.style.color = 'green'
  }
} );