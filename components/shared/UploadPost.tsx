import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

export default function UploadPost() {
  return (
    <div className="bg-[#D1D1D1] rounded-lg p-5 space-y-3">
      <h1 className="text-2xl font-semibold">Оставьте комментарий</h1>

      <Textarea placeholder="Твой комментарий" className="w-full min-h-45" />

      <div className="flex gap-3 max-md:flex-col">
        <Input placeholder="Имя*" />
        <Input placeholder="Почта*" type="email" />
        <Input placeholder="Сайт" />
        <Button>Отправить</Button>
      </div>
    </div>
  );
}
