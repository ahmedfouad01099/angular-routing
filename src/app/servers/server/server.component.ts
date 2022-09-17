import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServer(
      +this.route.snapshot.params["id"]
    );
    this.route.params.subscribe((params: Params) => {
      params["id"];
    });
  }

  onEdit() {
    // this.router.navigate(["/servers", this.server.id, "edit"]);
    // can do like this or can use relative path
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      // preserve make sure that you take previous query params
      queryParamsHandling: "preserve",
    });
  }
}
