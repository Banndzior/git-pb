GIT Lab 2

- [ ] Otwórz okno konsoli/terminalu

Opcje:
* cmd.exe / powershell.exe
* Windows Terminal
* Terminal / Shell
* Visual Studio Code Terminal

- [ ] Pobierz lub użyj istniejącego repozytorium git-pb

* Krok pobierania:
```dos
cd c:\pb\
git clone https://github.com/Banndzior/git-pb.git
```

* Krok użycia repozytorium:
```dos
cd c:\pb\git-pb
git pull
```

- [ ] Stwórz katalog ze swoim loginem GitHub (male litery)

`Przykladowa sciezka: c:\pb\git-pb\banndzior`

- [ ] W swoim katalogu zamieść dowolne 3 pliki, które nie są za duże
i treści nie naruszają warunków PB oraz GitHub

`Przykladowe pliki: 1 tekstowy, 1 obrazek, 1 javascript`

- [ ] Stwórz branch o nazwie: 'student/' + login GitHub (male litery)
```dos
git branch student/banndzior
```

- [ ] Przełącz się na stworzony branch
```dos
git checkout student/banndzior
```

- [ ] Przygotuj swoje pliki do commita
```dos
git add .
```

- [ ] Zrób commit z opisem swoich zmian
```dos
git commit -m "Moje zmiany"
```

- [ ] Pobierz zmiany z serwera
```dos
git pull
```

- [ ] Wyślij swoje zmiany na serwer
```dos
git push -u origin student/banndzior
```

- [ ] Sprawdź czy status nie zawiera, żadnych innych zmian
```dos
git status
```

- [ ] Sprawdź historie zmian
```dos
git log --oneline --decorate --graph --all
```

- [ ] Cofnij się do commit sprzed twoich zmian na branch
```dos
git checkout <commit>
```

- [ ] Wypisz zawartosc katalogu git-pb z konsoli i zapisz w pliku login GitHub, np.: `banndzior.txt`

- [ ] Wroc do swojego brancha
```dos
git checkout student/banndzior
```

- [ ] Wrzuc utworzony plik do swojego brancha i GitHub
