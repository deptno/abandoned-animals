# 유기동물조회

## 흐름
```text
 ┌──────┐          ┌──────────┐          ┌──┐          ┌───┐
 │λ_cron│          │data.go.kr│          │s3│          │ddb│
 └──┬───┘          └────┬─────┘          └┬─┘          └─┬─┘
    │       24/day      │                 │              │  
    │ <─────────────────>                 │              │  
    │                   │                 │              │  
    │                   │                 │              │  
    │ ────────────────────────────────────>              │  
    │                   │                 │              │  
    │                   │                 │  ttl: month  │  
    │                   │                 │ ────────────>│  
 ┌──┴───┐          ┌────┴─────┐          ┌┴─┐          ┌─┴─┐
 │λ_cron│          │data.go.kr│          │s3│          │ddb│
 └──────┘          └──────────┘          └──┘          └───┘
```

- `ddb`: **검색 요구사항** 이 먼저 나온 후 결정

<details>
<summary>수정</summary>
<a href="https://plantuml.com/ko/sequence-diagram">문법</a>
<a href="https://www.planttext.com">planttext.com</a>

```puml
@startuml

λ_cron <-> data.go.kr: 24/day
λ_cron -> s3
s3 -> ddb: ttl: month

@enduml
```
</details>

## 환경
### 개발
`yarn` **@필수**
```shell script
yarn add -D -W 개발디펜던시
yarn workspace @deptno/{패키지명} add 디펜던시 # 패키지명 예. aa_frontend
```
### 파일명 컨벤션
카멜 케이스(camelCase)
### aws
```shell script
aws configure --profile aa # 설정
```

## 검색 요구사항
- [ ] **@todo**

## 데이터 소스
https://www.data.go.kr/dataset/15001096/openapi.do