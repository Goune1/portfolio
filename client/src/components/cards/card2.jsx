import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Card2() {
  return (
    <Card className="max-w-[400px] bg-slate-800">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={30}
          radius="sm"
          src="favicon.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-white">EasyBot</p>
          <p className="text-small text-default-500">wine.gounevps.com</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-white">Achetez, configurez et profitez d'un bot discord </p>
        <img src="app_screenshot2.png" alt="app screenshot" className="pt-8" />
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/Goune1/saas"
        >
          Voir le code source sur GitHub
        </Link>
      </CardFooter>
    </Card>
  );
}
