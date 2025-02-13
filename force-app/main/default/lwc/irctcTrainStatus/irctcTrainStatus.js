/**
 * @description       : 
 * @author            : Piyush Dhaked
 * @group             : 
 * @last modified on  : 02-13-2025
 * @last modified by  : Piyush Dhaked
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   02-11-2025   Piyush Dhaked   Initial Version
**/
import { LightningElement, track } from 'lwc';
import getLiveTrainStatus from '@salesforce/apex/IRCTCTrainService.getLiveTrainStatus';
import getTrainSchedule from '@salesforce/apex/IRCTCTrainService.getTrainSchedule';

export default class IrctcTrainStatus extends LightningElement {
    @track selectedFeature = 'Live Train Status';
    @track trainNo = '';
    @track startDay = '0';
    @track data;
    @track error;
    @track isLoading = false;
    
    get featureOptions() {
        return [
            { label: 'Live Train Status', value: 'Live Train Status' },
            { label: 'Train Schedule', value: 'Train Schedule' }
        ];
    }
    
    get startDayOptions() {
        return [
            { label: 'Day 1 (Today)', value: '0' },
            { label: '1 Day Ago', value: '1' },
            { label: '2 Days Ago', value: '2' },
            { label: '3 Days Ago', value: '3' },
            { label: '4 Days Ago', value: '4' }
        ];
    }
    
    get isLiveStatus() {
        return this.selectedFeature === 'Live Train Status';
    }
    
    get isSchedule() {
        return this.selectedFeature === 'Train Schedule';
    }
    
    get runDays() {
        if(this.data && this.data.runDays) {
            let days = [];
            for(let day in this.data.runDays) {
                if(this.data.runDays[day]) {
                    days.push(day.toUpperCase());
                }
            }
            return days.join(', ');
        }
        return '';
    }
    
    handleFeatureChange(event) {
        this.selectedFeature = event.detail.value;
        this.data = null;
        this.error = null;
    }
    
    handleTrainNoChange(event) {
        this.trainNo = event.target.value;
    }
    
    handleStartDayChange(event) {
        this.startDay = event.detail.value;
    }
    
    fetchData() {
        this.error = null;
        if(!this.trainNo) {
            this.error = 'Please enter a train number.';
            return;
        }
        this.isLoading = true;
        if(this.isLiveStatus) {
            getLiveTrainStatus({ trainNo: this.trainNo, startDay: this.startDay })
                .then(result => {
                    let response = JSON.parse(result);
                    if(response && response.data && response.data.success) {
                        this.data = response.data;
                    } else {
                        this.error = response.message || 'Failed to fetch live train status.';
                    }
                    this.isLoading = false;
                })
                .catch(error => {
                    this.error = error.body ? error.body.message : error.message;
                    this.isLoading = false;
                });
        } else if(this.isSchedule) {
            getTrainSchedule({ trainNo: this.trainNo })
                .then(result => {
                    let response = JSON.parse(result);
                    if(response && response.data) {
                        if(response.data.route && Array.isArray(response.data.route)) {
                            response.data.route = response.data.route.map(route => {
                                return { 
                                    ...route, 
                                    formattedTime: this.formatTime(route.std_min) 
                                };
                            });
                        }
                        this.data = response.data;
                    } else {
                        this.error = response.message || 'Failed to fetch train schedule.';
                    }
                    this.isLoading = false;
                })
                .catch(error => {
                    this.error = error.body ? error.body.message : error.message;
                    this.isLoading = false;
                });
        }
    }
    
    refreshData() {
        this.fetchData();
    }
    
    formatTime(minutes) {
        if(isNaN(minutes)) {
            return minutes;
        }
        let hrs = Math.floor(minutes / 60);
        let mins = minutes % 60;
        return `${hrs < 10 ? '0' + hrs : hrs}:${mins < 10 ? '0' + mins : mins}`;
    }
}
