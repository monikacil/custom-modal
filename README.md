# Custom modal
Bachelor thesis project.

## Technology
Project created based on [Web Components](https://www.webcomponents.org/introduction)
* HTML
* CSS
* JavaScript 
* Webpack

## NPM package
[Link to package](https://www.npmjs.com/package/custom-modal-web-component)

## Usage in project
Install the package from NPM

```sh
$ npm i custom-modal-web-component
```

Use as a tag in your project

```sh
<custom-modal title='My modal'>
    <div slot='content'>Modal content as a slot</div>
</custom-modal>
```

### Parameters

Name | Type | Description | Mandatory | Default
--- | --- | --- | --- | ---
`title` | String | Available values **all** | Yes | -
`open` | Boolean | Modal visible if value `true` | No | `false`
`button` | String | Text for button in modal footer, if no `button` attribute - button invisible | No | `Send`
`size` | String | Available values **m / l** | No | `m`

### Available events
```btn-click```  - event triggered when footer `button` clicked.

```close```  - event triggered when closed the modal (`X` button clicked).


## Development

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
```

Build the development version.

```sh
$ npm run dev
```

Build the production version.

```sh
$ npm run build
```

Run webpack server and watch the changes.

```sh
$ npm run serve
```
