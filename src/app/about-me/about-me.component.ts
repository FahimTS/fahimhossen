import { AfterViewInit, Component, ElementRef, HostListener, NgZone, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;
  htmlValue = 0; cssValue = 0; jsValue = 0; phpValue = 0;
  skillsAnimated = false;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.skillsAnimated) {
          this.startAnimation();
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(this.aboutSection.nativeElement);
  }

  // Fallback scroll listener
  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.skillsAnimated) {
      const rect = this.aboutSection.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        this.startAnimation();
        this.skillsAnimated = true;
      }
    }
  }

  startAnimation() {
    this.skillsAnimated = true;
    this.ngZone.runOutsideAngular(() => {
      this.animateCount('htmlValue', 89, 'htmlValue-fill');
      this.animateCount('cssValue', 87, 'cssValue-fill');
      this.animateCount('jsValue', 75, 'jsValue-fill');
      this.animateCount('phpValue', 80, 'phpValue-fill');
    });
  }

  animateCount(prop: 'htmlValue'|'cssValue'|'jsValue'|'phpValue', target: number, selector: string) {
    let count = 0;
    const circle = this.aboutSection.nativeElement.querySelector(`.${selector}`) as SVGPathElement;
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference}`;
    const step = () => {
      if (count <= target) {
        (this as any)[prop] = count;
        circle.style.strokeDashoffset = `${circumference - (count / 100) * circumference}`;
        count++;
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }
}
