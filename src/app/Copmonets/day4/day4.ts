import { Component } from '@angular/core';

@Component({
  selector: 'app-day4',
  standalone: true,
  imports: [],
  templateUrl: './day4.html',
  styleUrl: './day4.css',
})
export class Day4 {
  // property padding for the photo
  photoPadding: string = 'p-4';

  // photo path
  photoPath2: string = 'https://i.sstatic.net/t8CZc.png';
  // photo path
  photoPath1: string =
    'https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png';
  // ===== Examples =====

  // Interpolation example
  userName: string = 'Mohammed';

  // Property binding (input value)
  inputPlaceholder: string = 'Type your name here';
  inputValue: string = 'Angular Student';

  // Property binding (image)
  photoAlt: string =
    'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png';

  // Property binding (disabled button)
  isSaving: boolean = true;

  // Event binding methods showing alerts and console logs

  onButtonClick(): void {
    alert('Button clicked!');
    console.log('Button clicked!');
  }

  onInputKeyup(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    console.log('Input value:', input.value);
  }
  //no click me method counter
  counter: number = 0;
  onClickMe(): void {
    this.counter++;
  }
  // condtions logic button
  isLoggedIn: boolean = false;
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
