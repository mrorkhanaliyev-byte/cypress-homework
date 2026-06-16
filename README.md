# Cypress Homework — QA Course

QA kursunun Cypress dərslərinə aid ev tapşırıqları və praktika nümunələri.

## Məzmun

| Qovluq | Mövzu |
|---|---|
| `Lesson2` / `-Izahli` | CSS selektorlar, assertion-lar, login testi (the-internet, saucedemo) |
| `Numune` / `-Izahli` | Eyni konseptlər fərqli real saytlarda (demoblaze, automationexercise, demoqa) |
| `Lesson3` / `-Izahli` | Qabaqcıl CSS + XPath (demoblaze) |
| `Lesson3-Homework` / `-Izahli` | XPath ilə real saytda element tapmaq (tap.az) |
| `Lesson3-Canli` / `-Izahli` | Locator konseptlərinin canlı nümayişi (ABB Bank) |

> `-Izahli` qovluqları eyni testlərin hər sətri izah olunan öyrənmə versiyalarıdır.

## İstifadə olunan texnologiyalar

- **Cypress 15** — E2E test çərçivəsi
- **cypress-xpath** — XPath selektor dəstəyi
- **cypress-mochawesome-reporter** — HTML test hesabatları

## Necə işlədilir

```bash
npm install          # asılılıqları qur
npm run cy:open      # Cypress pəncərəsində (interaktiv)
npm test             # terminal rejimində (bütün testlər)
```

Tək qovluq işlətmək:
```bash
npx cypress run --spec "cypress/e2e/Lesson3-Homework/*"
```

## Təhlükəsizlik qeydi

Bu layihədə **heç bir real giriş məlumatı (parol, FIN, açar) saxlanılmır.**
Testlərdə yalnız açıq demo məlumatları istifadə olunur. Real saytlara
(login tələb edən) avtomatik giriş edilmir. Gizli məlumatlar lazım olsa,
`cypress.env.json` faylında saxlanılır və `.gitignore` ilə git-dən kənarda tutulur.
