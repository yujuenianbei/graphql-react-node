CREATE TABLE `data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cameraid` varchar(128) NOT NULL COMMENT '摄像头id',
  `rtype` varchar(8) NOT NULL COMMENT '检测目标类型',
  `entrytime` varchar(16) DEFAULT NULL COMMENT '进入时间',
  `leavetime` varchar(16) DEFAULT NULL COMMENT '离开时间',
  `ori_img` varchar(128) DEFAULT NULL COMMENT '图片',
  `img` varchar(128) DEFAULT NULL COMMENT '图片',
  `sex` varchar(8) DEFAULT NULL COMMENT '性别',
  `canopy` varchar(8) DEFAULT NULL COMMENT '遮雨棚',
  `headwear` varchar(8) DEFAULT NULL COMMENT '头饰',
  `bicycletype` varchar(8) DEFAULT NULL COMMENT '非机动车类别',
  `has_object` varchar(32) DEFAULT NULL COMMENT '车上载物',
  `hair` varchar(30) DEFAULT NULL,
  `lower_type` varchar(30) DEFAULT NULL,
  `lower_color` varchar(30) DEFAULT NULL,
  `upper_type` varchar(30) DEFAULT NULL,
  `upper_color` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=565248 DEFAULT CHARSET=utf8 COMMENT='结果库'