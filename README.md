# Assignment-saleswhale

Assignment-saleswhale(Frontend Engineer, Junior / University Grad, Saleswhale)

- Mock up on Figma(https://www.figma.com/file/ZttV7gZOn3N9DMGuJea63DOt/SW-Frontend-UI-Test?node-id=0%3A1)

- React
- TypeScript
- Used libraries: Antd, Antd-design-pro

---

## Getting Started

Clone code at https://github.com/minj0i/assignment-saleswhale

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

---

## Folder Structure

```
src
 ┣ 📂components
 ┃ ┗ 📂icons
 ┃ ┃ ┣ 📜...icons
 ┃ ┃ ┗ 📜swLogoWhite.tsx
 ┣ 📂data
 ┃ ┗ 📜mock.json // test data
 ┣ 📂layout
 ┃ ┣ 📜TeamsLayout.tsx // Main Layout
 ┃ ┣ 📜_defaultProps.tsx // layout configure
 ┃ ┣ 📜header.module.css
 ┃ ┣ 📜header.tsx
 ┃ ┗ 📜index.module.css
 ┣ 📂pages
 ┃ ┗ 📂teams
 ┃ ┃ ┣ 📜activityCard.tsx
 ┃ ┃ ┣ 📜index.module.css
 ┃ ┃ ┗ 📜teamsCard.tsx // data card
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜routes.tsx
 ┗ 📜setupTests.ts
```

---

## Detailed instruction

- Fetch Data from API with useEffect

```js
//TeamsLayout.tsx:28
useEffect(() => {
  window
    .fetch(
      `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220610T110828Z&X-Amz-Expires=86400&X-Amz-Signature=953ab60ba35fb9b0a1545e83d8277a7ec937df1034c0fafe926492ec5835e87d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject`
    )
    .then(res => res.text())
    .then(parseErrorSolve => {
      const newJson = JSON.parse(parseErrorSolve.replaceAll(',\n    ,\n', ',\n'))
      setData(newJson)
    })
    .catch(error => {
      console.error('err', error)
    })
}, [])
```

- Reuse components (pages/teams/teamsCard.tsx)
  - When clicking the tab title, pass the title, and data to teamsCard by using effect

```js
//teamsLayout.tsx
:43
useEffect(() => {
    if (section === 'All Teams') setCardData(data?.teams)
    if (section === 'Favorites') setCardData(data?.teams.filter((v: any) => v.is_favorited))
    if (section === 'Archived') setCardData(data?.teams.filter((v: any) => v.is_archived))
  }, [section, data])

:130
<TeamsCard section={section} totalData={data?.teams?.length} data={cardData} />
```

- Make a difference between card style(Yellow star/Empty star) to favorites and unfavorite by data(is_favorite)

```js
//teamsCard.tsx
:52
{value.is_favorited ? (
  <img alt="favorite" src={starActive} className={styles.star} />
) : (
  <img alt="unfavorite" src={starDefault} className={styles.star} />
)}
```

- Make a difference between card Style(Background grey) to archived card

```js
//teamsCard.tsx
:31
  <div className={`${styles.topContianer} ${value.is_archived ? styles.archivedContainer : ''}`}>
:41
  <div className={`${styles.campaign_info} ${value.is_archived ? styles.archivedContainer : ''}`}>
```
