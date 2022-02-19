# DropDownMenu.js
A javascript library for create drop down menu in your app.

# Features
+ Create Drop Down Menu
+ Nestable(No Limit)

# Screenshot
![screenshot](img/Screenshot%202022-02-20%20015838.png)

# install
### script
`<script src="path/to/dist/index.min.js"></script>`
`<script src="https://unpkg.com/html-dropdown-menu/dist/index.min.js"><script>`

### CSS
`<link rel="stylesheet" href="path/to/dist/style.css">`
`<link rel="stylesheet" href="https://unpkg.com/html-dropdown-menu/dist/dropdown.css">`

# How To Use

```javascript
createDropDownMenu(appendTo,content)
```

## appendTo : HTMLElement
The Menu will be appended to the element.

## content Array\<DropDownMenuList>
```typescript
[
    DropdownListCategory1,
    DropdownListCategory2,
    DropdownListCategory3,
    ...
]
```

## DropDownMenuList
```typescript
{
    name:string,
    content: Array<DropDownMenuListLabel>
}
```

## DropDownMenuListlabel

```typescript
{
    text:string;
    onclick?:Function;
    children?: Array<DropDownMenuListLabel>
}
```
If the menu label has any children,onclick will be not executed.

# Example Menu Content
```javascript
[
    {
        name: "File",
        content: [
            {
                text: "New Instance",
                onclick:()=>window.open("url")
            },
            {
                text: "Open File",
                onclick:()=>...;
            },
            {
                text: "New Folder",
                onclick:()=>...;
            },
            {
                text: "Recent Opened",
                children: [
                    {
                        text: "path/to/file",
                        onclick:()=>...;
                    }
                ]
            }
        ]
    }
]

```