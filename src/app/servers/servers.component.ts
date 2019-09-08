import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId = 20;
  serverStatus = 'online';
  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = 'Test-Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreationStatus = 'Server Created with name: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target).value;
  }

}
