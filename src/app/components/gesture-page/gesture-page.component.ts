import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gesture-page',
  templateUrl: './gesture-page.component.html',
  styleUrls: ['./gesture-page.component.css']
})
export class GesturePageComponent {
  constructor(private profileService: StorageService,
    private toast: ToastrService
  ) {}

  public profilesData: any;

  ngOnInit() {
    this.getProfileData();
    this.getDtaa();
  }

  public getProfileData() {
    const profileData: any = this.profileService.getLocalStorage();
    const response = JSON.parse(profileData);
    response?.map((data: any) => {
      data['image'] = 'image1'
    });
    this.profilesData = response;
  }


  getData(profile: any) {
    return `${profile.age} Yrs, ${profile.height}, ${profile.language}, ${profile.education}, ${profile.profession}, ${profile.area}, ${profile.state}, ${profile.country} `;
  }

  getDtaa() {
    this.profileService.getUserDetails().subscribe((data: any) => {
      this.profileService.setLocalStorage(data);
    })
  }

  swipeYes(profileId: number) {
    this.removeProfile(profileId);
    this.toast.success('You showed interest in this profile', 'Interest');
  }

  swipeNo(profileId: number) {
    this.removeProfile(profileId);
    this.toast.warning('You have rejected this profile', 'Reject');
  }

  removeProfile(id: number) {
    this.profilesData = this.profilesData.filter((p: any) => p.id !== id);
    localStorage.setItem('profiles', JSON.stringify(this.profilesData));
  }
}
