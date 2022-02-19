interface DropDownMenuList extends Object {
    name: string;
    content: Array<DropDownMenuListLabel>;
}
interface DropDownMenuListLabel extends Object {
    text: string;
    onclick?: Function;
    children?: Array<DropDownMenuListLabel>;
}
declare function createDropDownMenu(appendTo: HTMLElement, items: Array<DropDownMenuList>): void;
//# sourceMappingURL=index.d.ts.map