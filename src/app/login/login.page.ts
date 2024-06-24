import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from '../dbservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: any="";
  password: string="";
  mensaje: string="";

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  login() {
    if (this.usuario.trim() == 'miguel' && this.password.trim() == '1234') {
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      }
      this.router.navigate(['/product-list'],NavigationExtras);
    }
    else{
      this.presentAlert('incorrecto');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  ir() {
    this.router.navigate(['/home']);
  }

}
