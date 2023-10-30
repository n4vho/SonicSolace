- [ ] give user options on what they want
    - [ ] sentiment analysis on a single album
        - [ ] enter artist and album name
    - [ ] sentiment analysis on multiple album
        - [ ] ask how many albums
            - [ ] enter artist_N and album_N


PROJECT STUCTURE

            myapp/
            ├── app/
            │   ├── __init__.py
            │   ├── routes.py
            │   ├── models.py
            │   ├── templates/
            │   │   ├── base.html
            │   │   ├── index.html
            │   │   └── result.html
            │   └── static/
            │       ├── css/
            │       │   └── style.css
            │       └── js/
            │           └── script.js
            ├── config.py
            ├── requirements.txt
            ├── run.py
            ├── todo.md
            ├── frontend/
            │   ├── package.json
            │   ├── tsconfig.json
            │   ├── public/
            │   │   ├── index.html
            │   │   └── favicon.ico
            │   └── src/
            │       ├── App.tsx
            │       ├── index.tsx
            │       ├── components/
            │       │   ├── Form.tsx
            │       │   └── Chart.tsx
            │       ├── styles/
            │       │   └── App.css
            │       └── utils/
            │           └── api.ts
            └── backend/
                ├── __init__.py
                ├── models.py
                ├── routes/
                │   ├── __init__.py
                │   ├── api.py
                │   └── views.py
                ├── static/
                │   └── data/
                │       └── albums.json
                └── templates/
                    └── base.html