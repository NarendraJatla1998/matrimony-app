import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private url: ActivatedRoute,
    private profileService: StorageService,
    private router: Router,
    private toast: ToastrService
  ) {}

  public id!: number;
  public profileData: any;
  public profileDataById: any;
  public profileContent: any;

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    const profileData: any = this.profileService.getLocalStorage();
    this.profileData = JSON.parse(profileData);
    this.id =  Number(this.url.snapshot.params['id']);
    this.profileContent = this.profileData.find((res: any) => res.id === this.id);
    this.profileDataById = this.profileData.find((res: any) => res.id === this.id)?.images;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  swipeYes() {
    this.toast.success('You showed interest in this profile', 'Interest');
  }

  swipeNo() {
    this.toast.warning('You have rejected this profile', 'Reject');
  }

}
