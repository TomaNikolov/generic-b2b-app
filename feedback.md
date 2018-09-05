- SharedModule/Core module stuff
  - Create core module(services) and shared module(directives and components) -> follow https://github.com/NativeScript/nativescript-starter-kits-utils/blob/master/docs/style-guide-app-template-ng.md
  - Export ui for nativescript in the shared module
  - `ModalDialogService` - there is no need to import anywhere
  - Do not import shared module in the app module.

- Platform directives can be simplified - don't inject `@Device` -> just use it form platfroms.
  
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

