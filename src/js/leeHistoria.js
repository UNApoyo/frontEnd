function leerHistoria(texto) {
	var reng= texto.split("\n");
  ha={};
	var n=reng.length;
	//nombre
	var nombre=reng[3].slice(0,-15);
	ha["name"] = nombre;////////
	//carrera
	var carrera=reng[21].match("[0-9]+");
	ha["career"] = carrera;////////
	//materias
	var materias=[];
	var i=22;
	while(i<n-28){
		var linea=reng[i];
		if(linea.match("[0-9]+[-][0-9]+[A-Z]*")){
			var cal=linea.split("\t").pop();
			linea=linea.split("-");
			materias.push([linea[0],cal]);
		}
		i++;
	}
	ha["subjects"] = materias;///////
	//
	var estudiante=reng.slice(-28,-9);
	//porcentaje
	var porcentaje=estudiante[0].match("[0-9]+");
	ha["percent"] = porcentaje; //////////77
	//disponibles
	var disponibles=estudiante[18].split("\t").slice(-2,-1);
	ha["available"] = disponibles; ///////
	//aprobados
	var aprobados=estudiante[10].split("\t").slice(-2,-1);
	ha["approved"] = aprobados;/////
	//pendientes
	var pendientes=estudiante[11].split("\t").slice(-2,-1);
	ha["pending"] = pendientes;//////7
	//inscritos
	var inscritos=estudiante[12].split("\t").slice(-2,-1);
	ha["inscribed"] = inscritos;
  return ha;
}
