import { Component, ElementRef } from "@angular/core";
import echarts from "echarts/lib/echarts";

import "echarts/lib/chart/pie";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private readonly elementRef: ElementRef) {}

  echarts() {
    const document = this.elementRef.nativeElement;
    const elementRef = document.querySelector("#echarts");

    (echarts.getInstanceByDom(elementRef)
      ? echarts.getInstanceByDom(elementRef)
      : echarts.init(elementRef, "default", { renderer: "svg" })
    ).setOption({
      series: [
        {
          animation: false,
          center: ["50%", "50%"],
          clockwise: false,
          data: [
            { name: "Abandoned", value: 11 },
            { name: "Expired", value: 9 },
            { name: "Granted", value: 5 },
            { name: "Other", value: 7 },
            { name: "Pending", value: 3 },
            { name: "Private", value: 1 },
          ],
          label: {
            formatter(p) {
              return `${p.name}: ${p.value}`;
            },
          },
          labelLine: {
            lineStyle: {
              type: "dashed",
            },
            smooth: true,
          },
          name: "Status",
          radius: ["25%", "50%"],
          type: "pie",
        },
      ],
    });
  }
}
