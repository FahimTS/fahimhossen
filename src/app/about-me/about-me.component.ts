import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  htmlValue = 0;
  cssValue = 0;
  jsValue = 0;
  phpValue = 0;

  targetReached = false;

  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.targetReached) {
          this.targetReached = true;
          this.animateValues();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(this.aboutSection.nativeElement);
  }

  animateValues() {
    this.animateCount('htmlValue', 90);
    this.animateCount('cssValue', 85);
    this.animateCount('jsValue', 75);
    this.animateCount('phpValue', 70);
  }

  animateCount(key: string, target: number) {
    let count = 0;
    const circleLength = 219.99;

    const step = () => {
      if (count <= target) {
        (this as any)[key] = count;

        // SVG fill animate
        const svgElement = document.querySelector(
          `.${key}-fill`
        ) as SVGPathElement;
        if (svgElement) {
          const offset = circleLength - (circleLength * count) / 100;
          svgElement.style.strokeDashoffset = offset.toString();
        }

        count++;
        this.cdRef.detectChanges();
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
