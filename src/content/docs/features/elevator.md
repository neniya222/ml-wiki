---
title: エレベーター
description: 鉄ブロックを使って、階層間を瞬時上下移動できる機能の作り方と使い方を紹介します
---

import { Image } from 'astro:assets';
import img1_1 from '../../../assets/features/elevator/1-1.webp';
import img1_2 from '../../../assets/features/elevator/1-2.webp';
import img1_3 from '../../../assets/features/elevator/1-3.webp';
import img2_1 from '../../../assets/features/elevator/2-1.webp';
import img2_2 from '../../../assets/features/elevator/2-2.webp';
import img2_3 from '../../../assets/features/elevator/2-3.webp';
import img2_4 from '../../../assets/features/elevator/2-4.png';

MiLight Serverでは、**鉄ブロック**を上下に並べるだけで簡単にエレベーターを作ることができます。拠点やビルなどの縦移動に非常に便利です。

---

## 🛠️ エレベーターの作り方

作り方はとてもシンプルです。上下の同じ座標に鉄ブロックを設置するだけです。

1. **1階に鉄ブロックを置く**
   移動の起点となる場所に鉄ブロックを設置します。
   <Image src={img1_1} alt="1階に鉄ブロックを設置" />

2. **2階（移動先）に鉄ブロックを置く**
   1階のブロックの**真上（同じX, Z座標）**に、もう一つ鉄ブロックを設置します。
   <Image src={img1_2} alt="2階に鉄ブロックを設置" />

3. **設置例**
   ブロックの間には、移動を遮るブロックがあっても問題ありません（最大距離はサーバー設定によります）。
   <Image src={img1_3} alt="エレベーター設置の全体図" />

---

## 🎮 使い方（移動方法）

設置した鉄ブロックの上に乗ることで動作します。

### 上に移動する
鉄ブロックの上に立ち、**ジャンプ**をします。
<Image src={img2_1} alt="1階でジャンプ" />
瞬時に上の階の鉄ブロックへ移動します。
<Image src={img2_2} alt="2階へ移動完了" />

### 下に移動する
鉄ブロックの上に立ち、**スニーク（Shiftキー）**をします。
<Image src={img2_3} alt="2階でスニーク" />
瞬時に下の階の鉄ブロックへ移動します。
<Image src={img2_4} alt="1階へ移動完了" />

---

## ⚠️ 注意事項

* **垂直に設置**: ブロックが1マスでも横にずれていると反応しません。
* **ブロックの間に空間**: 移動先の鉄ブロックの上には、プレイヤーが立てる分の2マスの空間が必要です。
* **鉄ブロック以外は不可**: このサーバーでは「鉄ブロック」のみがエレベーターとして機能します。

:::tip[応用編]
3階、4階とさらに上に鉄ブロックを重ねれば、何階建ての建物でも自由に行き来できるようになります！
:::
