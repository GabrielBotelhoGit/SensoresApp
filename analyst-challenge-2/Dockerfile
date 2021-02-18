#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
WORKDIR /src
COPY ["analyst-challenge-2/analyst-challenge-2.csproj", "analyst-challenge-2/"]
RUN dotnet restore "analyst-challenge-2/analyst-challenge-2.csproj"
COPY . .
WORKDIR "/src/analyst-challenge-2"
RUN dotnet build "analyst-challenge-2.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "analyst-challenge-2.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "analyst-challenge-2.dll"]