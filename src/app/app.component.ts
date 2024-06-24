import { Component, ViewChild } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('menu') menu: any;

  constructor(private router: Router, 
              private menuController: MenuController,
              private toastController: ToastController
              ) {}

  closeMenu() {
    this.menuController.close();
  }

  async logout() {
    // Eliminar cualquier token o datos de autenticación aquí
    localStorage.removeItem('authToken');

    this.closeMenu();

    // Mostrar el mensaje de "Sesión cerrada"
    const toast = await this.toastController.create({
      message: 'Sesión cerrada',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();

    // Redirigir a la página de inicio de sesión después de mostrar el mensaje
    this.router.navigate(['/login']);
  }

}

