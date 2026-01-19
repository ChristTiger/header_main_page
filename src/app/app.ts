import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Main } from "./main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'university-website';
}
