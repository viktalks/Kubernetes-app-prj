
# 🚀 Dockerize & Deploy on AKS - Assignment 3

This project shows how to containerize a simple Node.js app and deploy it to Azure Kubernetes Service (AKS) using Kubernetes manifests and optional Helm templating.

---

## 📁 Project Structure

```
aks-docker-k8s-deploy/
├── app/
│   ├── Dockerfile
│   └── server.js
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── configmap.yaml
│   └── secret.yaml
├── helm-chart/         # Optional Helm chart
│   └── basic-app/
├── README.md
```

---

## 🎞️ Project Flow

```mermaid
graph TD
  A[Node.js App] --> B[Docker Container]
  B --> C[DockerHub]
  C --> D[AKS Deployment]
  D --> E[Service (LoadBalancer)]
  E --> F[Public IP]
  D --> G[ConfigMap & Secret]
```

---

## 🐳 Step 1: Build & Push Docker Image

```bash
cd app/
docker build -t <your-dockerhub-username>/web-app:latest .
docker push <your-dockerhub-username>/web-app:latest
```

---

## ☸️ Step 2: Create AKS Cluster

```bash
az login
az group create --name myResourceGroup --location eastus
az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 1 --generate-ssh-keys
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
```

---

## 🚀 Step 3: Apply Kubernetes Manifests

```bash
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

---

## 🌐 Step 4: Get External IP

```bash
kubectl get svc web-service
```

Open the External IP in your browser.

---

## 🧹 Cleanup

```bash
kubectl delete -f k8s/
```

---

## 🎁 Bonus (Helm)

```bash
cd helm-chart/basic-app/
helm install my-app .
```

---

## 🔐 Tech Stack

- Node.js + Express
- Docker
- Kubernetes
- Azure AKS
- ConfigMap & Secret
- Helm (optional)
