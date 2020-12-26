CREATE TABLE `employee` (
  `employee_id` varchar(11) NOT NULL COMMENT '社员ID',
  `name` varchar(255) NOT NULL COMMENT '名前',
  `frigana` varchar(255) NOT NULL COMMENT 'フリガナ',
  `entering_date` date NOT NULL COMMENT '入社年月日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

INSERT INTO `employee` (`employee_id`, `name`, `frigana`, `entering_date`) VALUES
('uh5340', '張三', 'ちょう　さん', '2015-10-20');

CREATE TABLE `employee_certification` (
  `employee_id` varchar(11) NOT NULL,
  `certification_name` varchar(255) NOT NULL,
  `get_date` date NOT NULL,
  `encourage_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `employee_certification` (`employee_id`, `certification_name`, `get_date`, `encourage_date`) VALUES
('uh5340', '日本語能力試験2級', '2008-10-01', '0000-00-00'),
('uh5340', 'salesForce developer', '2017-06-01', '2017-12-01');

ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);
