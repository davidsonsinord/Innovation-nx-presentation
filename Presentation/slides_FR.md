---
title: NX
separator: <!--h-->
verticalSeparator: <!--v-->
theme: sky
highlight-theme: a11y-dark
revealOptions:
  auto-animate: true
---

## Présentation NX
Par

<img src="img/davidson-logo.png" alt="drawing" width="500"/>

Note: authors : 
 - S. LAVAZAIS
 - J. SPICHT
 - A. QUÉRÉ

sources:
 - https://excalidraw.com
 - https://nx.dev


<!--v-->

## Sommaire

1. Qu'est-ce qu'un mono-repository ?
2. Cas appliqué : un projet micro service
3. Et NX dans tout ça ?

Note:
le plan de la présentation

1. Qu'est-ce qu'un mono-repository ?
2. Cas appliqué : un projet micro service
   - présentation du cas
   - le cycle de dev 
     - en multi-repo
     - en mono-repo
   - l'organisation des releases
     - en multi-repo
     - en mono-repo
3. Et NX dans tout ça ?
   - décrire le principe du fonctionnement de NX
   - parler de ce qui a été réaliser sur le projet `DavLab`
   - Demo !
4. Questions
5. Remerciements

<!--h-->

<!-- .slide: data-auto-animate data-auto-animate-restart -->
#### Qu'est-ce qu'un "Mono-Repository" ?
Le principe de base

<img src="img/what-is-mono-repo.png" alt="drawing" width="800"/>

Note:
Lorsque l'on gère le code d'un projet type "micro-service", on range souvent le code dans plusieurs
dépôts de code. (figure de gauche)

Le principe de base d'un mono-repository est de mettre le contenu de tous ces dépôts dans un seul dépôt de 
code afin de garder une seule et même arborescence. (figure de droite)

<!--h-->

<!-- .slide: data-auto-animate data-auto-animate-restart -->
#### Cas appliqué : un projet micro service

![](img/micro-service.png)

Note:
Exemple en tête, un projet de micro-service typique, avec un back, un front, une librairie pour le back et 
une librairie de composant pour le front.

Maintenant, on va voir la différence concrète entre une organisation de code "classique" et une organisation en mode 
"mono-repository"

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
Le cycle de développement - multi

<img src="img/dev_cycle_multi.png" alt="drawing" width="500"/>

Note:
Comme on a pu le voir précédemment, le code est donc découpé en quatre dépôts (un pour chaque partie 
de ce micro-service).

Et Chacun de ces composants va avoir son propre cycle de développement

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
Le cycle de développement - mono

<img src="img/dev_cycle_mono.png" alt="drawing" width="600"/>

Note:
Dans le cas d'un mono repository, on ne peut pas avoir deux cycles de développements different.

Il faut donc en choisir un et faire en sorte que chaque composant s'inscrive dans ce nouveau cycle de développement.

Par soucis de simplicité, on peut choisir le trunk base, mais sur le papier, le git flow fonctionne également.

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
L'organisation des releases - multi

<img src="img/release_multi_step_1.png" alt="drawing" width="600"/>

Note:
Sur la partie livraison de composants, chacun des dépôts livre sa propre version.

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
L'organisation des releases - multi

<img src="img/release_multi_step_2.png" alt="drawing" width="500"/>

Note:
Par conséquence, lorsqu'un composant crée une dépendance vis à vis d'un autre, alors, on se retrouve à devoir mettre à
jour les liens de la dépendance en plusieurs fois.

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
L'organisation des releases - multi

<img src="img/release_multi_step_3.png" alt="drawing" width="500"/>

Note:
ce qui oblige donc à maintenir pendant une période de temps plusieurs versions de composants

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
L'organisation des releases - multi

<img src="img/release_multi_step_4.png" alt="drawing" width="500"/>

Note:
On obtient à la fin, un cycle de vie qui fonctionne en plusieurs temps.

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
L'organisation des releases - mono

<img src="img/release_multi_step_1.png" height="500"/>

Note:
Dans une mono-repository toute cette mécanique est beaucoup plus simple, car la cohérence entre les composants est 
systématiquement vérifiable à chaque tentative de livraison.

<!--v-->

<!-- .slide: data-auto-animate -->
#### Cas appliqué : un projet micro service
L'organisation des releases - mono

<img src="img/release_mono_step_2.png" height="500"/>

Note:
Dans une mono-repository toute cette mécanique est beaucoup plus simple, car la cohérence entre les composants est
systématiquement vérifiable à chaque tentative de livraison.

<!--h-->

<!-- .slide: data-auto-animate data-auto-animate-restart -->
#### Et NX dans tout ça ?


<img src="img/nx-logo.png" height="300"/>
<img src="img/narwal_logo.jpg" height="300"/>


Note:
NX est un framework conçu par "NRWL" (narval) comportant des outils et des techniques simples permettant d'accélérer grandement la productivité et 
la rendre plus simple du point de vue de l'expérience développeur.

Dans notre cas de projet micro-service NX est l'outil idéal pour mettre en pratique un mono-repository presque parfait

<!--v-->

<!-- .slide: data-auto-animate -->
#### Et NX dans tout ça ?
Le graph de dépendance

<img src="img/nx_graph.png" height="500"/>

Note:
NX construit un graph entre les applications / les librairies / les tests E2E

<!--v-->

<!-- .slide: data-auto-animate -->
#### Et NX dans tout ça ?
Le graph de dépendance - les "affected"

<img src="img/nx_graph_affected.png" height="500"/>

Note:
NX est capable de déduire les projets impactés par des modifications.
À partir des dépendances entre projets, il est capable de reconstituer toute la chaîne de projets impactés.

Grâce à ce mécanisme, NX est capable de garantir la cohérence de l'ensemble du mono-repo

<!--v-->

<!-- .slide: data-auto-animate -->
#### Et NX dans tout ça ?
Les languages

<img src="img/node_logo.png" height="300">
<div style="flex: fit-content">
    <img src="img/python-logo.png" height="100">
    <img src="img/go-logo.png" height="100">
    <img src="img/php-logo.png" height="100">
    <img src="img/rust-logo.png" height="100">
    <img src="img/haskell.png" height="100">
    <img src="img/java-logo.png" height="100">
</div>

Note:
NX supporte nativement l'écosystème node, et est capable de supporter tout type de langages via 
des plugins communautaires, ou par implémentation directe.

<!--v-->

<!-- .slide: data-auto-animate -->
#### Et NX dans tout ça ?
La Démo



Note:

Pour la démo, pour faire les différentes parties, j'ai retravaillé un peu l'ordre, je vous propose ce scénario :

**1. Présenter le repository de Démo**
Départ : back, lib back, lib front

**2. Présenter un générateur**
Générer l'app Next avec `nx g app`

Modifier le contenu de la page principale (ctrl+c/v)
Montrer l'import de la librarie
Montrer l'utilisation de l'API

**3. Lancer Nx graph**
Lancer `nx graph`

Montrer le lien entre le back et la lib du back
Pareil pour le front

Montrer l'abscence de lien entre l'app front et l'app back

**4. Rajouter la dépendance implicite entre back et front**
Modifier le `project.json`

**5. Montrer l'intégration dans le graph**
Relancer `nx graph`
Montrer le nouveau lien dans le graphs

**6. Montrer 2, 3 commandes**
commit les changements sur la main 😨
`git add . && git commit -m "feat(myapp-front): create myapp-front"`

Créer une nouvelle branche
`git checkout -b my-feat`

Montrer les tests en affected : rien ne se passe
`nx affected --target=test`

Modifier la lib

Relancer les tests et regarder les prpjets affected
`nx affected --target=test`

Montrer lancer un executeur sur un projet specific
`nx run myapp-front:serve`

formatter tout le code
`nx format`

**7. NX Cloud** (si il reste du temps)
Montrer une PR avec des erreurs dans les tests

Montrer le rapport de NX sur la PR

Montrer les logs sur la console

Montrer le cache sur la console


<!--h-->

#### Merci pour votre temps !

Présenter par
<div style="display: flex">
   <div style="margin-right: 1em;">
      <img src="https://avatars.githubusercontent.com/u/47711333?v=4" width="150"><br/>
      Anthony QUÉRÉ
   </div>
   <div>
      <img src="https://avatars.githubusercontent.com/u/56301405?v=4" width="150"><br/>
      Jules SPICHT
   </div>
   <div style="margin-left: 1em;">
      <img src="https://avatars.githubusercontent.com/u/134276360?v=4" width="150"><br/>
      Sylvain LAVAZAIS
   </div>
</div>

![QRCode-feedback.png](img/QRCode-feedback.png)

Sources:
- https://excalidraw.com
- https://nx.dev



