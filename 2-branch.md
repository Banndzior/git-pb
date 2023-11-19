# Branch / Galezie

* [ ] Otwórz okno konsoli/terminalu

Opcje:

* cmd.exe / powershell.exe
* Windows Terminal
* Terminal / Shell
* Visual Studio Code Terminal

* [ ] Pobierz lub użyj istniejącego repozytorium git-pb

* Krok pobierania:

```dos
cd c:\pb\
git clone https://github.com/Banndzior/git-pb-2
```

* Krok użycia repozytorium:

```dos
cd c:\pb\git-pb-2
git pull
```

* [ ] Stwórz katalog ze swoim loginem GitHub (male litery) w pobranym folderze repozytorium git-pb

`Przykladowa sciezka: c:\pb\git-pb-2\twoj-login-github`

* [ ] W swoim katalogu zamieść dowolne 3 pliki, które nie są za duże
i treści nie naruszają warunków PB oraz GitHub

`Przykladowe pliki: 1 tekstowy, 1 obrazek, 1 javascript`

* [ ] Stwórz branch o nazwie: 'student/' + login GitHub (male litery)

```dos
git branch student/twoj-login-github
```

* [ ] Przełącz się na stworzony branch

```dos
git checkout student/twoj-login-github
```

* [ ] Przygotuj swoje pliki do commita (pliki za katalogu twoj-login-github)

```dos
git add .
```

* [ ] Zrób commit z opisem swoich zmian

```dos
git commit -m "Moje zmiany"
```

* [ ] Pobierz zmiany z serwera

```dos
git pull
```

* [ ] Wyślij swoje zmiany na serwer

```dos
git push -u origin student/twoj-login-github
```

* [ ] Sprawdź czy status nie zawiera, żadnych innych zmian

```dos
git status
```

* [ ] Sprawdź historie zmian (wyjscie z historii przycisk Q)

```dos
git log --oneline --decorate --graph --all
```

* [ ] Cofnij się do commit sprzed twoich zmian na branch

```dos
git checkout <id-commit>
```

`Przyklad: git checkout 345dd07254770d3ddeeed10c9e038116a3952df4`

* [ ] Wypisz zawartosc katalogu git-pb z konsoli i zapisz w pliku login GitHub, np.: `twoj-login-github.txt`

```dos
dir
```

```powershell
ls
```

```bash
ls
```

* [ ] Wroc do swojego brancha

```dos
git checkout student/twoj-login-github
```

* [ ] Wrzuc utworzony plik do swojego katalogu, na swoj branch i wyslij na server GitHub

```dos
git add .
git commit -m "Moj plik"
git push origin student/twoj-login-github
```

* [ ] Odswiez swoj branch o zmiany z brancha master/main
```dos
git checkout main
git pull
git checkout student/twoj-login-github
git merge main
git push
```

* [ ] Utworz Pull Request swojego brancha do main

https://github.com/Banndzior/git-pb-2/compare

* [ ] Utworz branch hotfix/twoj-login-github z twojego brancha

```dos
git checkout -b hotfix/twoj-login-github
git branch
```

* [ ] Zmien plik tekstowy w swoim katalogu i commituj zmiane

```dos
git add .
git commit -m "Poprawka hotfixa"
```

* [ ] Merguj zmiany do swojego brancha student/twoj-login-github

```dos
git checkout student/twoj-login-github
git merge hotfix/twoj-login-github
```

