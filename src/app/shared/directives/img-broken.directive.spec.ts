import { ImgBrokenDirective } from './img-broken.directive';
import { ElementRef } from '@angular/core';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const mockRef = new ElementRef('');
    const directive = new ImgBrokenDirective(mockRef);
    expect(directive).toBeTruthy();
  });
});
