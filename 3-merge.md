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

* [ ] Usuń nieśledzone pliki (<https://coderwall.com/p/g16jpq/keep-your-git-directory-clean-with-git-clean-and-git-trash>)

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

* [ ] Stwórz ponownie plik (Windows używa notepad.exe / Unix - touch) z wpisanym paragrafem lorem ipsum (<https://loremipsum.io/>)

```dos
notepad lab-3.txt
git add lab-3.txt
```

* [ ] Stwórz commit na hotfix/twoj-login-github

```dos
git commit -m "Moj plik z hotfix"
```

* [ ] Połącz branch feat/twoj-login-github z master (no conflicts, fast-forward)

```dos
git checkout master
git merge feat/twoj-login-github
```

* [ ] Porównaj branch hotfix/twoj-login-github z feat/twoj-login-github (conflicts, merge commit)

```dos
git diff feat/twoj-login-github hotfix/twoj-login-github
```

* [ ] Połącz branch hotfix/twoj-login-github z feat/twoj-login-github (conflicts, merge commit)

```dos
git checkout feat/twoj-login-github
git merge hotfix/twoj-login-github
```

* [ ] Wroc na branch hotfix/twoj-login-github i stworz commit odwracajacy zmiany (skopiuj id commita z konsoli)

```dos
git checkout hotfix/twoj-login-github
git rev-parse HEAD
git revert <commit-id>
```

* [ ] Wyslij swoje 2 branche na serwer

```dos
git push origin hotfix/twoj-login-github
git push origin feat/twoj-login-github
```

* [ ] Znajdz commit, w ktorym byl dodany katalog z twoj-login-github i jego zawartosc

```dos
git rev-list --all --pretty=oneline -- "*/twoj-login-github*"
```

* [ ] Zaimportuj commit do swojego branch feat/twoj-login-github

```dos
git checkout feat/twoj-login-github
git cherry-pick <commit-id>
```

* [ ] Stwórz Pull Request ze zmian na feat/twoj-login-github na stronie GitHub

`https://github.com/Banndzior/git-pb/compare`
