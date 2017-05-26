import { Component, OnInit } from '@angular/core';
import { Http,Headers,RequestOptions,HttpModule } from '@angular/http';


declare var leerHistoria: any;
@Component({
  selector: 'app-hist-textbox',
  templateUrl: './hist-textbox.component.html',
  styleUrls: ['./hist-textbox.component.css']
})

export class HistTextboxComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  data;
  loading;
  historiaText;
  envio: any;
  postResponse;
  historializar(){
    var headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    this.envio= JSON.stringify({"estudiante": this.historiaText});
    this.http.post('http://localhost:3000/estudiantes/leer_historia',this.envio,options)
      .subscribe((res: any)=>{
      this.data=res.json();
      this.loading=true;
      this.postResponse=res;

      })

  }
}
