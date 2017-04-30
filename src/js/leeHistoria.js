function leerHistoria(texto) {
	var reng= texto.split("\n");
  ha={};
	var n=reng.length;
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
	//nombre
	var nombre=reng[3].match("^((?!terminar).)*")[0];
	ha["name"] = nombre;/////
	//carrera
	var carrera=texto.match("[0-9]{4}");
	ha["career"] = carrera;//////////7
	//
	var estudiante=reng.slice(-28,-5);
	var a=0;
	if(reng[4][0]=='t'){//firefox
		//porcentaje
		var porcentaje=estudiante[1].match("[0-9]+");
		ha["percent"] = porcentaje; //////////
		a=2;
	} else{
		//porcentaje
		var porcentaje=estudiante[0].match("[0-9]+");
		ha["percent"] = porcentaje; //////////
	}
	//disponibles
	var disponibles=estudiante[18+a].split("\t").slice(-2,-1);
	ha["available"] =disponibles;/////
	//aprobados
	var aprobados=estudiante[10+a].split("\t").slice(-2,-1);
	ha["approved"] = aprobados;////
	//pendientes
	var pendientes=estudiante[11+a].split("\t").slice(-2,-1);
	ha["pending"] = pendientes;//////
	//inscritos
	var inscritos=estudiante[12+a].split("\t").slice(-2,-1);
	ha["inscribed"] = inscritos;//////////////777
	return ha;
}
