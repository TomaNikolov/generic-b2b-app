- Put nativescript-ui-XXX modules in the shared module
- Side-drawer - what's the idea, will it be used?
- Is there a reason to use `data/observable-array`. It's better not ti use NS observable classes in Angular and rely only on Observable

- In list view templates - you can attach (tap) event directly in the template root view and then pass in the item directly. For example in `inbox-list.component.ts/html`:
```
template:
<ng-template tkListItemTemplate let-message="item">
    <GridLayout (tap)="onMessageItemTap(message)">...</GridLayout>
</ng-template>

code:
onMessageItemTap(tappedInboxItem: any): void {
    this._navigationService.relativeRouterNavigation(["../inbox-detail", tappedInboxItem._id], this._activatedRoute);
}
```

