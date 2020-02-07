import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [
                {
                    "ID": 1,
                    "ProductUnique": "9d5a077b-1eb4-4ae0-afeb-0134fff9a6a0",
                    "ProductCode": "P-4367",
                    "ProductName": "Table",
                    "Description": "Laudantium laboriosam laborum sint est et quis.\r\nUt laboriosam perspiciatis libero ipsa ab.\r\nOptio maiores occaecati impedit dolor sint voluptates dolorem ut impedit.",
                    "SellingPrice": 41725.234375,
                    "DisplayImageURL": "http://content/images/1.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 2,
                    "ProductUnique": "8075e97f-54b2-42af-b2ab-eb4a38abda3d",
                    "ProductCode": "P-8180",
                    "ProductName": "Ball",
                    "Description": "Voluptatibus minima tempore omnis dolores sed quod nobis ut.\r\nPossimus sint vel nihil.\r\nVoluptas eveniet voluptatibus illum.",
                    "SellingPrice": 46774.30859375,
                    "DisplayImageURL": "http://content/images/2.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 3,
                    "ProductUnique": "496b6473-5b85-442d-9c98-ded460bb0421",
                    "ProductCode": "P-3071",
                    "ProductName": "Table",
                    "Description": "Aut molestiae ut.\r\nConsequatur ad incidunt.\r\nVel maxime non tempore tenetur doloremque eveniet in maiores.",
                    "SellingPrice": 38683.453125,
                    "DisplayImageURL": "http://content/images/3.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 4,
                    "ProductUnique": "f969781f-08ce-4b7c-87fc-1d587b18b3d3",
                    "ProductCode": "P-1234",
                    "ProductName": "Bike",
                    "Description": "Et est laudantium quae nobis.\r\nTemporibus tenetur aut laboriosam et dolor.\r\nTemporibus consequuntur molestiae consequatur.",
                    "SellingPrice": 47738.5234375,
                    "DisplayImageURL": "http://content/images/4.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 5,
                    "ProductUnique": "e4757626-061e-49e5-a06c-71077ab70eb6",
                    "ProductCode": "P-2476",
                    "ProductName": "Shirt",
                    "Description": "Nam quaerat illo iste sint autem.\r\nVero molestias eos voluptatem labore consequatur dolorum voluptas aperiam.\r\nCumque laudantium ut impedit.",
                    "SellingPrice": 48335.69140625,
                    "DisplayImageURL": "http://content/images/5.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 6,
                    "ProductUnique": "bc603320-0971-4639-9f10-977c63d34998",
                    "ProductCode": "P-8505",
                    "ProductName": "Hat",
                    "Description": "A sint voluptas cum fugiat et reiciendis voluptas.\r\nTenetur eaque ut a voluptate.\r\nEligendi alias accusamus.",
                    "SellingPrice": 22603.037109375,
                    "DisplayImageURL": "http://content/images/6.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 7,
                    "ProductUnique": "7be8cbb4-b808-42f1-a200-53fc415ddf0b",
                    "ProductCode": "P-8572",
                    "ProductName": "Sausages",
                    "Description": "Laboriosam dolores nulla ut corrupti minima et sed quaerat.\r\nTenetur aliquam omnis at rerum tenetur ut iure.\r\nQuo nam minima consequatur tenetur provident ipsa optio.",
                    "SellingPrice": 8562.140625,
                    "DisplayImageURL": "http://content/images/7.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 8,
                    "ProductUnique": "eba3825b-16c6-4cff-8aa3-72111f60da6d",
                    "ProductCode": "P-8346",
                    "ProductName": "Shoes",
                    "Description": "Praesentium est odit at saepe.\r\nDolorum ut ea qui inventore assumenda perspiciatis.\r\nConsequatur similique est aut est et fugit maxime.",
                    "SellingPrice": 40327.19921875,
                    "DisplayImageURL": "http://content/images/8.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 9,
                    "ProductUnique": "641e2eb6-095a-4cfe-b97f-f7289e9735c0",
                    "ProductCode": "P-7282",
                    "ProductName": "Soap",
                    "Description": "Animi quisquam eaque tempore.\r\nNesciunt et quod.\r\nEum ea quia beatae maiores earum laborum.",
                    "SellingPrice": 14861.8798828125,
                    "DisplayImageURL": "http://content/images/9.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 10,
                    "ProductUnique": "a72122db-4620-4282-92cf-c26d343c871b",
                    "ProductCode": "P-7446",
                    "ProductName": "Pizza",
                    "Description": "Tenetur saepe iure cumque non atque natus et.\r\nEst non dicta omnis et est quidem non eveniet rerum.\r\nUt asperiores corporis est eum ipsa voluptate.",
                    "SellingPrice": 12488.4052734375,
                    "DisplayImageURL": "http://content/images/10.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 11,
                    "ProductUnique": "23053904-2a2a-4a1e-b764-3b9768bab0bb",
                    "ProductCode": "P-7572",
                    "ProductName": "Ball",
                    "Description": "Et magni inventore quia.\r\nIllum dignissimos culpa laudantium consequatur natus aperiam maxime et eaque.\r\nEnim earum beatae minus voluptates aut quo sint est.",
                    "SellingPrice": 43663.76953125,
                    "DisplayImageURL": "http://content/images/11.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 12,
                    "ProductUnique": "69bcd394-99ce-4c16-98dc-c997e6971b29",
                    "ProductCode": "P-8944",
                    "ProductName": "Ball",
                    "Description": "Ipsa saepe libero quis.\r\nQuia magni quis.\r\nVero perferendis voluptas excepturi necessitatibus aut esse nihil odit minima.",
                    "SellingPrice": 46617.8046875,
                    "DisplayImageURL": "http://content/images/12.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 13,
                    "ProductUnique": "972f90a6-2c0e-4135-b8ff-985cd8c3a258",
                    "ProductCode": "P-1893",
                    "ProductName": "Computer",
                    "Description": "Aut delectus ut voluptatem ea deserunt reiciendis aliquid sed.\r\nQuia nesciunt ratione sit quibusdam.\r\nSuscipit sit ut.",
                    "SellingPrice": 39887.30859375,
                    "DisplayImageURL": "http://content/images/13.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 14,
                    "ProductUnique": "37fd5b71-7844-49cb-9ea1-0a9f24d9edbf",
                    "ProductCode": "P-3900",
                    "ProductName": "Chicken",
                    "Description": "Deserunt nam officiis rerum architecto voluptatem ratione odit ducimus architecto.\r\nAccusamus maiores ipsam.\r\nEa assumenda ex perspiciatis fugit reiciendis praesentium.",
                    "SellingPrice": 10998.0830078125,
                    "DisplayImageURL": "http://content/images/14.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 15,
                    "ProductUnique": "a54d7de2-6020-4054-9f0d-bbca6ca272f8",
                    "ProductCode": "P-8288",
                    "ProductName": "Tuna",
                    "Description": "Minima qui exercitationem eos quidem voluptatem ut.\r\nDolores deserunt quo deserunt nobis.\r\nNostrum ducimus quo et dolorem id cupiditate facere.",
                    "SellingPrice": 47753.41015625,
                    "DisplayImageURL": "http://content/images/15.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 16,
                    "ProductUnique": "2919e333-5def-4627-9705-cb72230eb4d5",
                    "ProductCode": "P-1282",
                    "ProductName": "Chips",
                    "Description": "Laborum id ut veritatis quisquam consectetur nihil dolor aliquid.\r\nDolore non nam quo.\r\nQui odio nulla qui et odit corrupti officiis neque quisquam.",
                    "SellingPrice": 39007.65625,
                    "DisplayImageURL": "http://content/images/16.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 17,
                    "ProductUnique": "67a4459b-a6db-4b61-aef0-73181351bc76",
                    "ProductCode": "P-2098",
                    "ProductName": "Soap",
                    "Description": "Numquam adipisci nostrum at dolorem ipsam qui.\r\nEius exercitationem voluptas quo explicabo architecto eos nam.\r\nSit sed ea et eaque blanditiis a.",
                    "SellingPrice": 5357.1181640625,
                    "DisplayImageURL": "http://content/images/17.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 18,
                    "ProductUnique": "a75391fc-752d-4561-98c0-f87ead180b60",
                    "ProductCode": "P-9844",
                    "ProductName": "Keyboard",
                    "Description": "Recusandae at beatae et provident quas.\r\nAut quia soluta.\r\nSed ut nesciunt occaecati qui.",
                    "SellingPrice": 44072.375,
                    "DisplayImageURL": "http://content/images/18.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 19,
                    "ProductUnique": "7e0b0956-d1cd-4ef5-ba41-eeb3fee81a7c",
                    "ProductCode": "P-9247",
                    "ProductName": "Chair",
                    "Description": "Amet voluptatum sit aperiam corrupti illo voluptatem.\r\nId libero minima et.\r\nArchitecto voluptatem repellat quia qui distinctio nam sunt in quidem.",
                    "SellingPrice": 45956.71484375,
                    "DisplayImageURL": "http://content/images/19.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 20,
                    "ProductUnique": "b6f02a81-6b79-42ea-a817-367da788ba83",
                    "ProductCode": "P-1635",
                    "ProductName": "Car",
                    "Description": "Explicabo necessitatibus error quo quia qui sit laboriosam earum.\r\nEst et ut ipsam reprehenderit dolores neque.\r\nEa exercitationem molestiae occaecati.",
                    "SellingPrice": 23381.98046875,
                    "DisplayImageURL": "http://content/images/20.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 21,
                    "ProductUnique": "031ea45b-e509-4fc8-b097-9fe6768f6a47",
                    "ProductCode": "P-9269",
                    "ProductName": "Mouse",
                    "Description": "Sit possimus dolor in illum eius aperiam qui.\r\nCum est voluptatem quo praesentium illum excepturi molestiae ut.\r\nDelectus corporis sapiente saepe aliquam aliquam laboriosam iusto.",
                    "SellingPrice": 39398.71484375,
                    "DisplayImageURL": "http://content/images/21.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 22,
                    "ProductUnique": "2e83120a-1b83-479d-b7b4-daccad401a02",
                    "ProductCode": "P-6137",
                    "ProductName": "Bike",
                    "Description": "Facilis culpa eveniet amet repudiandae quasi soluta quo.\r\nExcepturi repellendus velit est et libero vel beatae omnis rerum.\r\nVoluptas consequuntur consequatur porro modi.",
                    "SellingPrice": 33539.28515625,
                    "DisplayImageURL": "http://content/images/22.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 23,
                    "ProductUnique": "625aeb7f-e9aa-4560-895b-aa896120be1a",
                    "ProductCode": "P-1895",
                    "ProductName": "Pizza",
                    "Description": "Debitis voluptate officiis voluptatibus quos debitis quae.\r\nIpsa sit quia non sed rerum hic et qui.\r\nAsperiores expedita minima.",
                    "SellingPrice": 11006.4462890625,
                    "DisplayImageURL": "http://content/images/23.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 24,
                    "ProductUnique": "87647696-1fe2-4831-acb2-d723df2226cc",
                    "ProductCode": "P-4089",
                    "ProductName": "Towels",
                    "Description": "Velit qui ut perferendis ut possimus.\r\nVelit vel culpa.\r\nVoluptatum molestiae dolorum vel.",
                    "SellingPrice": 38499.328125,
                    "DisplayImageURL": "http://content/images/24.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 25,
                    "ProductUnique": "1bfa737c-6c4b-4382-bf55-b9cc582f07f6",
                    "ProductCode": "P-4317",
                    "ProductName": "Pizza",
                    "Description": "Ratione deleniti repellendus dolore reiciendis quisquam quo ipsa qui corporis.\r\nFugiat voluptatem quae quos rerum et ut.\r\nCommodi dolores laborum iure consequatur velit quisquam odit sit.",
                    "SellingPrice": 14837.54296875,
                    "DisplayImageURL": "http://content/images/25.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 26,
                    "ProductUnique": "cd1688aa-be4d-4e9c-829b-946243a9e0c8",
                    "ProductCode": "P-4374",
                    "ProductName": "Cheese",
                    "Description": "Eum animi est vero.\r\nSint sunt sit delectus et ullam suscipit ut sed.\r\nFacilis molestias omnis.",
                    "SellingPrice": 19361.615234375,
                    "DisplayImageURL": "http://content/images/26.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 27,
                    "ProductUnique": "c2c6e89f-e382-44a4-b811-feacda0be92e",
                    "ProductCode": "P-9714",
                    "ProductName": "Hat",
                    "Description": "Error minus similique.\r\nQuibusdam ex qui est beatae dolores facilis ipsa facere aut.\r\nNeque reprehenderit nostrum totam culpa et temporibus provident explicabo reiciendis.",
                    "SellingPrice": 2764.12109375,
                    "DisplayImageURL": "http://content/images/27.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 28,
                    "ProductUnique": "bc823897-502c-4e13-8666-58750c69fb6e",
                    "ProductCode": "P-4022",
                    "ProductName": "Tuna",
                    "Description": "Corporis qui consequatur cumque iure laboriosam blanditiis eaque.\r\nQui et ipsa vel blanditiis quae.\r\nVoluptatem sit et ducimus.",
                    "SellingPrice": 28571.96484375,
                    "DisplayImageURL": "http://content/images/28.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 29,
                    "ProductUnique": "ab25f3ba-241b-4118-b908-ebe8b352e60d",
                    "ProductCode": "P-6538",
                    "ProductName": "Tuna",
                    "Description": "Deleniti suscipit dicta quo blanditiis enim molestiae repudiandae consequuntur.\r\nSuscipit tempore inventore fugit quod voluptas ducimus.\r\nNesciunt voluptatem eveniet autem et et dolorum.",
                    "SellingPrice": 38948.42578125,
                    "DisplayImageURL": "http://content/images/29.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 30,
                    "ProductUnique": "48616edb-c164-4260-af8e-b8673249635d",
                    "ProductCode": "P-8981",
                    "ProductName": "Bike",
                    "Description": "Occaecati minus quaerat accusamus asperiores pariatur aut porro vero eum.\r\nQuas illum amet voluptas excepturi quia voluptates facere.\r\nQuos quis amet laudantium et ex qui rem eius.",
                    "SellingPrice": 9126.6962890625,
                    "DisplayImageURL": "http://content/images/30.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 31,
                    "ProductUnique": "a63e4cb7-1e09-48df-8a92-05e583ae7f53",
                    "ProductCode": "P-5270",
                    "ProductName": "Chips",
                    "Description": "Explicabo quo aperiam quia sit enim tenetur ipsa facilis.\r\nLabore deleniti neque pariatur et dolorem qui quam.\r\nNon mollitia rerum blanditiis harum.",
                    "SellingPrice": 42866.0078125,
                    "DisplayImageURL": "http://content/images/31.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 32,
                    "ProductUnique": "1abdb1b9-ac03-42da-a1ca-52cc675a29ee",
                    "ProductCode": "P-3302",
                    "ProductName": "Keyboard",
                    "Description": "Et id adipisci dolorem in id et voluptas tenetur.\r\nSit quidem quia.\r\nVoluptatem recusandae ea quis dolores autem in ut unde autem.",
                    "SellingPrice": 12971.9423828125,
                    "DisplayImageURL": "http://content/images/32.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 33,
                    "ProductUnique": "ef7c7c51-2de7-474e-92fc-a1571ea5f97c",
                    "ProductCode": "P-8520",
                    "ProductName": "Keyboard",
                    "Description": "Soluta fugit qui.\r\nAutem cupiditate et quidem minus explicabo et vel voluptate aut.\r\nDolor esse non et cum autem quae.",
                    "SellingPrice": 39091.6015625,
                    "DisplayImageURL": "http://content/images/33.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 34,
                    "ProductUnique": "582bc364-8201-4a5a-8cd3-ec79856e6ee9",
                    "ProductCode": "P-2086",
                    "ProductName": "Gloves",
                    "Description": "Nobis commodi praesentium nisi aut quia.\r\nIpsam eaque molestias sit.\r\nDolorem sit fugit dolores.",
                    "SellingPrice": 49127.12890625,
                    "DisplayImageURL": "http://content/images/34.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 35,
                    "ProductUnique": "69e943d2-1c1f-4deb-9dcb-dfae1ab20122",
                    "ProductCode": "P-8068",
                    "ProductName": "Keyboard",
                    "Description": "Eum ea totam voluptates rem autem.\r\nDelectus occaecati repellendus error temporibus quia maxime amet repellat quia.\r\nIn consectetur libero non pariatur odio eveniet sit atque ullam.",
                    "SellingPrice": 31827.712890625,
                    "DisplayImageURL": "http://content/images/35.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 36,
                    "ProductUnique": "849b9de4-6e2b-4201-a104-97937edfdd5a",
                    "ProductCode": "P-7576",
                    "ProductName": "Table",
                    "Description": "Vel est quia repellendus voluptate.\r\nIllo ea repudiandae omnis et exercitationem eum enim.\r\nOfficiis nostrum velit cum dolor dolorum voluptatem eos.",
                    "SellingPrice": 6367.8974609375,
                    "DisplayImageURL": "http://content/images/36.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 37,
                    "ProductUnique": "1d2d2cf2-fb27-47d9-a591-875662832a9d",
                    "ProductCode": "P-3955",
                    "ProductName": "Keyboard",
                    "Description": "Quasi fugit ut voluptatem.\r\nA sit blanditiis aut.\r\nRepellat at quam.",
                    "SellingPrice": 16712.763671875,
                    "DisplayImageURL": "http://content/images/37.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 38,
                    "ProductUnique": "0093ad0d-9466-40f9-93fd-c621783adc3e",
                    "ProductCode": "P-3106",
                    "ProductName": "Salad",
                    "Description": "Expedita enim corrupti reprehenderit aut non.\r\nQuo laboriosam natus animi est sit voluptates quia maxime.\r\nVoluptates suscipit inventore voluptate voluptatem eligendi.",
                    "SellingPrice": 47480.89453125,
                    "DisplayImageURL": "http://content/images/38.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 39,
                    "ProductUnique": "5f19899b-cf32-426f-8552-e864cf13cccc",
                    "ProductCode": "P-6463",
                    "ProductName": "Car",
                    "Description": "Sed iure a repellendus qui omnis.\r\nPerferendis nostrum nemo.\r\nSit amet praesentium et error aliquam harum tenetur.",
                    "SellingPrice": 36751.70703125,
                    "DisplayImageURL": "http://content/images/39.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 40,
                    "ProductUnique": "5127b6a9-4648-4e89-ad72-7a15a67ce32d",
                    "ProductCode": "P-7018",
                    "ProductName": "Tuna",
                    "Description": "Repellendus alias et quia qui dolorum.\r\nFacilis ad modi velit dolorum ea repellat sed.\r\nMollitia maiores animi impedit adipisci sed porro quaerat.",
                    "SellingPrice": 45027.4921875,
                    "DisplayImageURL": "http://content/images/40.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 41,
                    "ProductUnique": "b1d04489-1cb2-4ddf-acc3-a3a599a36ac9",
                    "ProductCode": "P-9664",
                    "ProductName": "Shirt",
                    "Description": "Distinctio et at qui voluptatum vero omnis est.\r\nDebitis consequuntur maxime voluptatem veniam distinctio soluta.\r\nIpsum libero impedit aut.",
                    "SellingPrice": 33984.56640625,
                    "DisplayImageURL": "http://content/images/41.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 42,
                    "ProductUnique": "2136f199-bb2d-4033-986a-7b09878d2b29",
                    "ProductCode": "P-1247",
                    "ProductName": "Shirt",
                    "Description": "Ut suscipit numquam unde autem molestiae suscipit.\r\nMolestiae sapiente natus dolorem deleniti rem dolor et porro expedita.\r\nQui a aliquid quasi quasi tenetur.",
                    "SellingPrice": 15205.380859375,
                    "DisplayImageURL": "http://content/images/42.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 43,
                    "ProductUnique": "6ca5cf76-f6ba-48c1-b5f0-1b35660b922b",
                    "ProductCode": "P-5839",
                    "ProductName": "Table",
                    "Description": "Quasi ullam expedita voluptatem ipsam labore aut tempora consequuntur.\r\nOptio dignissimos ut iusto possimus sapiente placeat.\r\nSit nobis ullam aut ut.",
                    "SellingPrice": 13857.47265625,
                    "DisplayImageURL": "http://content/images/43.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 44,
                    "ProductUnique": "39501436-8f74-4863-8bcf-2b851d81a2bc",
                    "ProductCode": "P-3568",
                    "ProductName": "Pants",
                    "Description": "Aut mollitia aliquid et id.\r\nVelit quasi accusantium quasi velit temporibus ipsum voluptatem eaque perspiciatis.\r\nFacilis ut possimus sit consectetur et nam dolorum.",
                    "SellingPrice": 9813.484375,
                    "DisplayImageURL": "http://content/images/44.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 45,
                    "ProductUnique": "682997cc-358d-4670-be4d-736033671d98",
                    "ProductCode": "P-9718",
                    "ProductName": "Gloves",
                    "Description": "Non voluptatibus odit ipsam neque dolorum repellendus magnam.\r\nVoluptatem natus rerum.\r\nEaque sequi magni voluptatibus autem harum incidunt tenetur.",
                    "SellingPrice": 42363.40625,
                    "DisplayImageURL": "http://content/images/45.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 46,
                    "ProductUnique": "c0a5ef7c-53fb-4561-ac39-f9f3c40e3cec",
                    "ProductCode": "P-2295",
                    "ProductName": "Soap",
                    "Description": "Quaerat ab qui.\r\nBeatae delectus illum velit.\r\nQuis ullam facilis et laboriosam non ipsum dolor.",
                    "SellingPrice": 2892.201904296875,
                    "DisplayImageURL": "http://content/images/46.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 47,
                    "ProductUnique": "585d3bdf-efea-4b71-a538-d12a4a8eef64",
                    "ProductCode": "P-5562",
                    "ProductName": "Mouse",
                    "Description": "Iste aspernatur sit eum qui ut rerum nisi.\r\nRatione nihil eum minima et.\r\nQuas molestiae atque placeat ducimus hic quaerat illum.",
                    "SellingPrice": 41895.78125,
                    "DisplayImageURL": "http://content/images/47.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 48,
                    "ProductUnique": "5fd21b79-139f-4716-8a30-6fafc7da7776",
                    "ProductCode": "P-4694",
                    "ProductName": "Towels",
                    "Description": "Maxime animi sunt.\r\nReiciendis nobis ducimus unde et inventore voluptatum hic.\r\nVoluptatem quia perferendis rerum architecto qui nemo et aliquam.",
                    "SellingPrice": 23316.228515625,
                    "DisplayImageURL": "http://content/images/48.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 49,
                    "ProductUnique": "ef43e5b8-5135-4bc6-b4b8-0b332a9f9aea",
                    "ProductCode": "P-7358",
                    "ProductName": "Pants",
                    "Description": "Quo vitae illo.\r\nAut nihil veritatis nobis et et dignissimos.\r\nEarum qui quod aut.",
                    "SellingPrice": 35586.17578125,
                    "DisplayImageURL": "http://content/images/49.jpg",
                    "ProductAnnualSales": []
                },
                {
                    "ID": 50,
                    "ProductUnique": "84e8796c-858f-462a-b885-f272673c472a",
                    "ProductCode": "P-6042",
                    "ProductName": "Ball",
                    "Description": "Qui consequatur numquam fugit.\r\nEt incidunt corporis maiores.\r\nEum doloribus dolores.",
                    "SellingPrice": 48223.453125,
                    "DisplayImageURL": "http://content/images/50.jpg",
                    "ProductAnnualSales": []
                }
            ]

        }
    }

    componentWillMount() {
        this.ApiHit()
    }
    ServiceCall = async () => {

        let response = await fetch("http://content/APIForPhoneDeveloper/api/product/?type=json", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        return result;
    }
    ApiHit = async () => {
        var response = await this.ServiceCall();
        this.setState({
            product: reposnse
        })
    }

    DescriptionService = async (id) => {
        let response = await fetch("http://content/APIForPhoneDeveloper/api/product/" + id + "/?type=json", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        return result;
    }
    productDescrption(param) {
        var reponse = this.DescriptionService(param);
        this.props.navigation.navigate("ProductDescription", { Description: reponse })
    }

    render() {
        return (
            <View>
                <View style={{ width: '100%', flexDirection: 'row', marginBottom: 10, height: 50 }}>
                    <View style={{ width: '15%', justifyContent: 'center' }}>
                        <Text style={{ paddingLeft: 10 }}>Back</Text>
                    </View>
                    <View style={{ width: '85%', justifyContent: 'center' }}>

                        <Text style={{ textAlign: 'center', paddingRight: 40, fontSize: 16 }}> Product Page </Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.product}
                    listKey={(item, index) => 'enterprise-' + index.toString()}
                    initialNumToRender={5}
                    ref={(ref) => { this.ListView_Ref = ref; }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity onPress={this.productDescrption.bind(this, item.ID)} style={{ width: '96%', height: 100, borderBottomColor: 'lightgray', borderBottomWidth: 1, marginVertical: 2, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ width: 75, height: 75, justifyContent: 'center', borderRadius: 100, backgroundColor: 'lightgray', }}>
                                <Image source={{ uri: item.DisplayImageURL }} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '70%', marginHorizontal: 10, height: 90 }}>
                                <Text> {item.ProductName}</Text>
                                <Text> {item.SellingPrice}</Text>

                            </View>
                        </TouchableOpacity>
                    )} />
            </View>

        )
    }

}