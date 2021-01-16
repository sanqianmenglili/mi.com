-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-01-16 10:35:40
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `mi.com`
--

-- --------------------------------------------------------

--
-- 表的结构 `mi`
--

CREATE TABLE `mi` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `pro_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pro_price` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pro_color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pro_option` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ram` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `mi`
--

INSERT INTO `mi` (`id`, `pro_title`, `sale`, `pro_price`, `address`, `pro_color`, `pro_option`, `img`, `ram`) VALUES
(1, '小米11', '<span>「新品热卖中！最高享6期免息；购机返双倍米金；标配不提供充电器和数据线，如需请选择套装版」</span> 骁龙888｜2K AMOLED 四曲面柔性屏｜1亿像素三摄｜时尚轻薄机身｜55W 有线闪充｜50W 无线闪充｜10W 无线反充｜LPDDR5｜WiFi6（增强版）｜视频「超级夜景」｜哈曼卡顿音频认证｜立体声双扬声器', '[3999,4299,4699]', '[\'北京\',\'北京市\',\'海定区\',\'清河街道\']', '黑色,蓝色,白色,紫烟(素皮)', '[\'标准版\',\'套装版(赠充电器)\']', '[{\"src\":\"../img/mi-11.webp\"},{\"src\":\"../img/mi-11-1.jpg\"},{\"src\":\"../img/mi-11-2.jpg\"}]', '8GB+128GB,8GB+256GB,12GB+256GB'),
(2, 'Redmi K30 至尊纪念版', '<span>「火爆热卖中！得2倍米金；+1元得200G云空间月卡；购机抽奖赢70英寸电视」</span> 120Hz弹出全面屏 / 天玑1000+旗舰处理器 / 索尼6400万四摄 / 立体声双扬声器 / 4500mAh+33W闪充 / 双模5G / 多功能NFC / 线性震动马达 / 红外遥控', '[2199,2499,1999]', '', '月慕白,极夜黑,薄荷绿', '', '[{\"src\":\"../img/red-mi.webp\"},{\"src\":\"../img/redmi-1.jpg\"},{\"src\":\"../img/redmi-2.jpg\"},{\"src\":\"../img/redmi-3.jpg\"},{\"src\":\"../img/redmi-4.jpg\"},{\"src\":\"../img/redmi-5.jpg\"}]', '8GB+128GB,8GB+256GB,6GB+128GB'),
(3, '小米10', '<span>「购机返双倍米金；尊享优惠加价购」</span> 骁龙865处理器 / 1亿像素8K电影相机 / 双模5G / 新一代LPDDR5内存 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配Wi-Fi 6 / 超强VC液冷散热 / 30W极速闪充+30W无线闪充+10W无线反充 / 4780mAh大电量 / 多功能NFC', '[3799,3999,4399]', '', '国风雅灰,钛银黑,冰海蓝,蜜桃金', '', '[{\"src\":\"../img/mi-10.webp\"},\r\n{\"src\":\"../img/mi-10-1.jpg\"},{\"src\":\"../img/mi-10-2.jpg\"},{\"src\":\"../img/mi-10-3.jpg\"},{\"src\":\"../img/mi-10-4.jpg\"},{\"src\":\"../img/mi-10-5.jpg\"}]', '8GB+128GB,8GB+256GB,12GB+256GB'),
(4, '小米10 青春版 5G', '<span>「购机享6期分期免息，得2倍米金」</span> 向往的生活同款/ 50倍潜望式超远变焦 / 双模5G / 骁龙765G处理器 / 三星AMOLED原色屏 / 180Hz采样率 / 4160mAh大电池 / 多功能NFC / 红外遥控器', '[1999,2099,2399]', '', '白桃乌龙,蓝莓薄荷,黑巧风暴,桃子西柚,四季春奶绿', '', '[{\"src\":\"../img/mi-10-5g.webp\"},\r\n{\"src\":\"../img/mi-10-5g-1.jpg\"},{\"src\":\"../img/mi-10-5g-2.jpg\"},{\"src\":\"../img/mi-10-5g-3.jpg\"},{\"src\":\"../img/mi-10-5g-4.jpg\"},{\"src\":\"../img/mi-10-5g-5.jpg\"}]', '6GB+128GB,8GB+128GB,8GB+256GB'),
(5, '小米MIX Alpha', '创新环绕屏，极具未来感的智能交互体验 / 1亿像素超高清相机，超大感光元件 / 5G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 纳米硅基锂离子4050mAh电池，40W超级快充 / 钛合金+精密陶瓷+蓝宝石镜片前沿工艺', '[19999]', '', '黑色', '', '[{\"src\":\"../img/mi-mix.webp\"},\r\n{\"src\":\"../img/mi-mix-1.jpg\"},{\"src\":\"../img/mi-mix-2.jpg\"},{\"src\":\"../img/mi-mix-3.jpg\"},{\"src\":\"../img/mi-mix-4.jpg\"},{\"src\":\"../img/mi-mix-5.jpg\"}]', '512GB');

--
-- 转储表的索引
--

--
-- 表的索引 `mi`
--
ALTER TABLE `mi`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `mi`
--
ALTER TABLE `mi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
