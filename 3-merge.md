# Branch + merge

* [ ] Otwórz okno konsoli/terminalu

Opcje:

* cmd.exe / powershell.exe
* Windows Terminal
* Terminal / Shell
* Visual Studio Code Terminal

* [ ] Użyj istniejącego repozytorium git-pb

```dos
cd c:\pb\git-pb
```

* [ ] Stwórz plik (Windows używa notepad.exe / Unix - touch)

```dos
notepad lab-3.txt
```

* [ ] Zmień plik 1-podstawy-git.md

Wpisz dowolny tekst i zapisz zmiany

* [ ] Pobierz zmiany (moze sie nie udac)

```dos
git checkout master
git pull
```

* [ ] Anuluj wszystkie zmiany jakie masz

```dos
git reset --hard
```

* [ ] Usuń nieśledzone pliki

```dos
git clean -fd
```

* [ ] Pobierz zmiany ponownie

```dos
git pull
```

* [ ] Stwórz ponownie plik (Windows używa notepad.exe / Unix - touch) z wpisana 1 linia z loginem GitHub

```dos
notepad lab-3.txt
git add lab-3.txt
```

* [ ] Odłóż zmiany na półkę (plik zniknie)

```dos
git stash push
```

* [ ] Wypisz listę zapamiętanych zmian

```dos
git stash list
```

* [ ] Stwórz branch o nazwie: 'feat/' + login GitHub (male litery)

```dos
git checkout -b feat/twoj-login-github
```

* [ ] Przywróć zmiany i stwórz commit

```dos
git stash pop
git add .
git commit -m "Moj plik z feature"
```

* [ ] Zedytuj commit (dodaj kolejna linie z nazwa branch'a do pliku)

```dos
notepad lab-3.txt
git add .
git commit --amend
```

* [ ] Wróć na branch master i stwórz kolejny branch

```dos
git checkout master
git checkout -b hotfix/twoj-login-github
```

* [ ] Stwórz ponownie plik (Windows używa notepad.exe / Unix - touch) z wpisanym paragrafem lorem ipsum (https://loremipsum.io/)

```dos
notepad lab-3.txt
git add lab-3.txt
```

* [ ] Stwórz commit na hotfix/twoj-login-github

```dos
git commit -m "Moj plik z hotfix"
```

* [ ] Zmerguj branch feat/twoj-login-github z master (no conflicts, fast-forward)

```dos
git checkout master
git merge feat/twoj-login-github
```

* [ ] Zmerguj branch hotfix/twoj-login-github z feat/twoj-login-github (conflicts, merge commit)

```dos
git checkout master
git merge feat/twoj-login-github
```