import Food from "../model/food_deliver_model.js"
export default class foodcontroller{
    static async orderplace (req, res) {
        const { items } = req.body;
        //console.log(items);
        const order = new Food({ items, status: 'Pending' });
        await order.save();
        res.json({ message: 'Order placed successfully!', orderId: order._id });
      };
       static async orderstatus (req, res) {
        const { orderId } = req.params;
        console.log(orderId);
        const order = await Food.findById(orderId);
        if (!order) {
          return res.status(404).json({ error: 'Order not found!' });
        }
        res.json({ status: order.status });
      }
       static async updatestaus(req, res) {
        const { orderId } = req.params;
        const order = await Food.findByIdAndUpdate(
          orderId,
          { status: 'Delivered' },
          { new: true }
        );
        if (!order) {
          return res.status(404).json({ error: 'Order not found!' });
        }
        res.json({ message: 'Delivery status updated successfully!' });
      };
    }

    