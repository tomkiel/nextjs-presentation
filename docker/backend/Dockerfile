FROM python:3.11-alpine

WORKDIR /app
ENV PYTHONPATH=/app

COPY ../../backend/requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

COPY ../../.env.prod /app/.env
COPY ../../backend/ /app/backend

CMD ["hypercorn", "-w", "4", "-b", "0.0.0.0:80", "backend.wsgi:app"]
