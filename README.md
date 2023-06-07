# Template Presentation

- Type: `Presentation`
- State: `In progress`
- Engine: [`Reveal-MD`](https://github.com/webpro/reveal-md) (based on [`RevealJs`](https://revealjs.com/))

## Presentation

This is a presentation of NX Monorepository 

### Prerequisit

- Mandatory: `Docker`, `a web browser`
- Optional: `an IDE`, `a PDF reader`

### Speaker

To present, simply run this docker command:

```shell
docker run --rm -p 1948:1948 -p 35729:35729 \
-v `pwd`/Presentation:/slides \
webpronl/reveal-md:latest /slides \
--watch --css style/custom.css --highlight-theme a11y-dark
```
or (if you are not on windows)
```shell
make presentation
```

this will start a web server on this url : [http://localhost:1948/](http://localhost:1948/)

you can go with `a browser` of your choice to begin (the presentation has been made with Chromium version`109`)

NOTE: Speaker notes are available by pressing `S` key (help command on `?` key)

### PDF

export of the presentation in PDF is generated each time a new version of the presentation is made
(commit to `main` branch)

but you can generate it using command

```shell
make export-pdf
```
_only work on linux or mac(intel)_

## Demonstration

doc for the demo
